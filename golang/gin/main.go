package main

import (
    "github.com/gin-gonic/gin"
    "github.com/jinzhu/gorm"
    _ "github.com/mattn/go-sqlite3"
)

type Keyword struct {
    gorm.Model
    Id   int
    Name string
}

func initDB() {
    db, err := gorm.Open("sqlite3", "gin.sqlite")
    if err != nil {
        panic("failed to connect database\n")
    }
    db.AutoMigrate(&Keyword{})
}

func getAll() []Keyword {
    db, err := gorm.Open("sqlite3", "gin.sqlite")
    if err != nil {
        panic("failed to connect database\n")
    }
    var keyword []Keyword
    db.Find(&keyword)
    return keyword
    
}

func main() {
    r := gin.Default()
    initDB()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })
    r.GET("/keywords", func(c *gin.Context) {
        keyword := getAll()
        c.JSON(200, gin.H{
            "keywords": keyword,
        })
    })
    r.Run()
}
