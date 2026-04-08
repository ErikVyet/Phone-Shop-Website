package com.source.service;

import java.util.List;

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
    public List<ProductDTO> getAll() {
        List<Product> list = productRepository.findAll();
        List<ProductDTO> result = list.stream().map(about -> {
            return ProductDTO.fromEntity(about);
        }).toList();
        return result;
    }
}
