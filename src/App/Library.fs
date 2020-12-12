module App

open Fable.React
open Fable.React.Props
open Feliz

[<ReactComponent>]
let Title (props: {| name: string |}) =
    div [] [
        h2 [] [
            str ($"Hello there, {props.name}")
        ]
        button [ OnClick(fun _ -> Browser.Dom.window.alert ("Foobar")) ] [
            str "Click me"
        ]
    ]
