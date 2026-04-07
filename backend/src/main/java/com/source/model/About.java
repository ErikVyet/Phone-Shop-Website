package com.source.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "About")
public class About {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "varchar(255)")
    private String section;

    @Column(columnDefinition = "varchar(255)")
    private String title;

    @Column(columnDefinition = "text")
    private String content;

    @Column(columnDefinition = "varchar(255)")
    private String image;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}