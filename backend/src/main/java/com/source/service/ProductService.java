package com.source.service;

import java.util.List;

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
            spec = spec.and((root, query, cb) -> root.get("screen").in(screens));
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
}
