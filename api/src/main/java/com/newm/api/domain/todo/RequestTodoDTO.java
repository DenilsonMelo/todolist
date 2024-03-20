package com.newm.api.domain.todo;

import jakarta.validation.constraints.NotBlank;

public record RequestTodoDTO(

        String id,
        @NotBlank
        String title,
        @NotBlank
        String description,
        @NotBlank
        String status) {}
