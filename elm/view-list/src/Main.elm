module Main exposing (..)

import Html exposing (div, h1, text, ol, li)

main : Html.Html msg
main =
    let
        items = [ "A", "B", "C" ]
    in
        div []
            [ h1 [] [ text "View List" ]
            , ol [] ( viewItems items )
            ]

viewItems : List String -> List (Html.Html msg)
viewItems items =
    List.map viewItem items

viewItem : String -> Html.Html msg
viewItem v =
    li [] [ text v ]
