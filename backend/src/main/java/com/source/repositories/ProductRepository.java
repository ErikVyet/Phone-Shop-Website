    package com.source.repositories;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    import com.source.models.Product;

    @Repository
    public interface ProductRepository extends JpaRepository<Product, Integer> {
        
    }
