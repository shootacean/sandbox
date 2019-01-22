package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
)

type Keyword struct {
    Word string `json:"keyword"`
}

func main() {
    bytes, err := ioutil.ReadFile("keywords.json")
    if err != nil {
        log.Fatal(err)
    }
    var keywords []Keyword
    if err := json.Unmarshal(bytes, &keywords); err != nil {
        log.Fatal(err)
    }
    for _, s := range keywords {
        fmt.Printf("%s\n", s.Word)
    }
}

