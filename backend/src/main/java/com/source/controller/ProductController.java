package com.source.controller;

import org.springframework.data.domain.Slice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.source.dto.ProductDTO;
import com.source.request.ProductFilterRequest;
import com.source.service.ProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:5173") 
public class ProductController {

   protected final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/all")
    public ResponseEntity<Slice<ProductDTO>> getAllProduct(@RequestBody ProductFilterRequest request) {
        try {
            return ResponseEntity.ok(productService.getAll(request.getBrand(), request.getScreens(), request.getRams(), request.getStorages(), request.getPrices(), request.getPage()));
        }
        catch(Exception exception) {
            System.out.println(exception.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable(required=true) int id) {
        try {
            return ResponseEntity.ok(productService.getById(id));
        }
        catch(Exception exception) {
            System.out.println(exception.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/price-range")
    public ResponseEntity<double[]> getPriceRange() {
        try {
            return ResponseEntity.ok(productService.getPriceRange());
        }
        catch(Exception exception) {
            System.out.println(exception.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }
   
}