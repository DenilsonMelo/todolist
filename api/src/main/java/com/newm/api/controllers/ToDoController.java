package com.newm.api.controllers;

import com.newm.api.domain.todo.RequestTodoDTO;
import com.newm.api.domain.todo.Todo;
import com.newm.api.domain.todo.TodoRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/todo")
public class ToDoController {
    @Autowired
    private TodoRepository repository;
    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllTodos(){
        var allTodos = repository.findAll();
        return ResponseEntity.ok(allTodos);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable String id){
        var todo = repository.findById(id);
        return ResponseEntity.ok(todo);
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity createTodo(@RequestBody @Valid RequestTodoDTO data){
        Todo newTodo = new Todo(data);
        repository.save(newTodo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTodo);
    }
}
