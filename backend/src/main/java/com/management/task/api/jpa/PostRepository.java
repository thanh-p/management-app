package com.management.task.api.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.task.api.user.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
