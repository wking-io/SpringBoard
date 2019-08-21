module Admin exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import TheProcess exposing (TheProcess, Preview, ProcessData)


type alias Model =
    { processList : List (TheProcess Preview) }

init : () -> (Model, Cmd Msg)
init () =
    (Model TheProcess.mock, Cmd.none)


type Msg
    = UserClickedCreateProcess
    | UserUpdatedTitleField String
    | UserUpdatedDescriptionField String
    | UserSavedNewProcess ProcessData
    | ServerReturnedSaveResponse


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        UserClickedCreateProcess ->
            ( model, Cmd.none )
        UserUpdatedTitleField title ->
            ( model, Cmd.none )
        UserUpdatedDescriptionField description ->
            ( model, Cmd.none )
        UserSavedNewProcess newProcess ->
            ( model, Cmd.none )
        ServerReturnedSaveResponse ->
            ( model, Cmd.none )

renderProcessList : Process -> Html Msg
renderProcessList process =
    case process of
        Active activeData { id, title, description } -> 
            Html.li [] [
                Html.h3 [] [ Html.text title ]
                , Html.p [] [ Html.text description ]
            ]

        Inactive inactiveData { id, title, description } -> 
            Html.li [] [
                Html.h3 [] [ Html.text title ]
                , Html.p [] [ Html.text description ]
            ]

view : Model -> Html Msg
view model =
    div []
        [ Html.h1 [] [ Html.text "SpringBoard" ]
        , Html.div [] [
            Html.ul [] (List.map renderProcessList model.processList)
        ]
        ]

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
