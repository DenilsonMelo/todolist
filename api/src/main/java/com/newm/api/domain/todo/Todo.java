package com.newm.api.domain.todo;

import jakarta.persistence.*;
import lombok.*;

@Table(name="todo")
@Entity(name="todo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String title;

    private String description;

    private String status;

    public Todo(RequestTodoDTO requestTodoDTO){
        this.title = requestTodoDTO.title();
        this.description = requestTodoDTO.description();
        this.status = requestTodoDTO.status();
    }
}
