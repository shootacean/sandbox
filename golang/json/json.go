package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
)

type Setting struct {
    Keyword string `json:"keyword"`
}

func main() {
    bytes, err := ioutil.ReadFile("gin.json")
    if err != nil {
        log.Fatal(err)
    }
    var settings []Setting
    if err := json.Unmarshal(bytes, &settings); err != nil {
        log.Fatal(err)
    }
    for _, s := range settings{
        fmt.Printf("%s\n", s.Keyword)
    }
}

