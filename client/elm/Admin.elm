module Admin exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Time exposing (Posix)


type alias Model =
    { processList : List Process }

type Process
    = Active ActiveData ProcessData
    | Inactive InactiveData ProcessData

type alias ProcessData =
    { id: Id
    , title : String
    , description : String
    }

type alias ActiveData =
    { lastActivity : Posix 
    , progress : String
    }

type alias InactiveData =
    { lastCompleted : Posix
    , completedCount : Int
    }

type Id
    = New
    | Id String

fakeProcessess : List Process
fakeProcessess =
    [
        Active
            { lastActivity = Time.millisToPosix 1565984035514
            , progress = "12/20"
            }
            { id = Id "123456"
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
            }
    ,   Inactive
            { lastCompleted = Time.millisToPosix 1565984035514
            , completedCount = 12
            }
            { id = Id "123457"
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
            }
    ]

init : () -> ( Model, Cmd Msg)
init () =
    (Model fakeProcessess, Cmd.none)


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
