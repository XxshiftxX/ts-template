package com.example.book.web

import org.springframework.web.bind.annotation.RestController

@RestController
class PostsApiController {
    private lateinit var postsService: PostsService

}