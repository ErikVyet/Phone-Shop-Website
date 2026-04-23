package com.source.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.source.dto.ProductDTO;
import com.source.model.Product;
import com.source.repository.ProductRepository;

@Service
public class ProductService {
    protected final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public Slice<ProductDTO> getAll(String brand, List<String> screens, List<String> rams, List<String> storages, double prices[], int page) {
        Specification<Product> spec = Specification.unrestricted();
        if (brand != null && !brand.isEmpty()) {
            spec = spec.and((root, query, cb) -> root.get("brand").in(brand));
        }
        if (screens != null && !screens.isEmpty()) {
            Specification<Product> screenSpecs = Specification.unrestricted();
            for (String range : screens) {
                screenSpecs = screenSpecs.or((root, query, cb) -> {
                    if (range.contains("to")) {
                        System.out.println("Processing screen range: " + range);
                        String[] parts = range.replace("'", "").split("to");
                        return cb.between(root.get("screen"), Double.valueOf(parts[0]), Double.valueOf(parts[1]));
                    } 
                    else if (range.startsWith("Under")) {
                        return cb.lessThan(root.get("screen"), 5.5);
                    } 
                    else if (range.startsWith("Above")) {
                        return cb.greaterThan(root.get("screen"), 6.7);
                    }
                    return null;
                });
            }
            spec = spec.and(screenSpecs);
        }
        if (rams != null && !rams.isEmpty()) {
            spec = spec.and((root, query, cb) -> root.get("ram").in(rams));
        }
        if (storages != null && !storages.isEmpty()) {
            spec = spec.and((root, query, cb) -> root.get("storage").in(storages));
        }
        if (prices != null && prices.length == 2) {
            spec = spec.and((root, query, cb) -> cb.between(root.get("price"), prices[0], prices[1]));
        }
        Slice<Product> queryRes = productRepository.findAll(spec, PageRequest.of(page, 12));
        return queryRes.map(ProductDTO::fromEntity);
    }

    @Transactional(readOnly = true)
    public double[] getPriceRange() {
        Optional<Product> minPriceProductOpt = productRepository.findFirstByOrderByPriceAsc();
        Optional<Product> maxPriceProductOpt = productRepository.findFirstByOrderByPriceDesc();
        double minPrice = minPriceProductOpt.isEmpty() ? 0.0 : minPriceProductOpt.get().getPrice();
        double maxPrice = maxPriceProductOpt.isEmpty() ? 0.0 : maxPriceProductOpt.get().getPrice();
        return new double[]{minPrice, maxPrice};
    }
}
