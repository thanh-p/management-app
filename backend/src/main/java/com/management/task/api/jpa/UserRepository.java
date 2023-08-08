package com.management.task.api.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.task.api.user.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
