module IndexPage exposing (main)

import Browser
import Context exposing (Context)
import Html exposing (Html)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (Value)
import Result
import TheProcess exposing (TheProcess, Preview, ProcessData)
import UI

type PageModel
    = PageModel Context ( List (TheProcess Preview) )

type Model
    = Error String
    | Success PageModel

init : Value -> (Model, Cmd Msg)
init flags =
    Decode.decodeValue Context.decoder flags
        |> Result.map (\context -> Success (PageModel context TheProcess.mock))
        |> Result.withDefault (Error "Failed to parse flags")
        |> (\model -> (model, Cmd.none))


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

view : Model -> Html Msg
view model =
    case model of
        Error error ->
            Html.div [] [ Html.text error ]

        Success (PageModel context processes) ->
            Html.div [ class "font-sans text-black" ]
                [ Html.nav [ class "flex items-center bg-white px-12 py-6 mb-8" ]
                    [ Html.div [ class "flex-1 flex items-center"]
                        [ UI.logo
                        , Html.h1 [ class "text-xl font-bold ml-3" ] [ Html.text "SpringBoard" ]
                        ]
                    , Html.ul [ class "flex items-center" ]
                        [ Html.li [ class "m-0 mr-8" ] [ Html.a [ href (context.url ++ "/wp-admin/admin.php?page=springboard"), class "sb-link text-base font-medium" ] [ Html.text "Process List" ] ]
                        , Html.li [ class "m-0" ] [ Html.a [ href (context.url ++ "/wp-admin/admin.php?page=springboard-settings"), class "sb-link text-base font-medium" ] [ Html.text "Settings" ] ]
                        ]
                    ]
                , Html.div [ class "bg-white p-12 mb-12" ]
                    [ Html.h2 [ class "font-bold text-2xl mb-6" ] [ Html.text "Process List" ]
                    , Html.div [] [ Html.text "Search, Filter and Create New will go here" ]
                    ]
                , Html.div [ class "px-12" ]
                    [ Html.ul [ class "sb-process-wrapper" ] (List.map (TheProcess.renderPreview context.url) processes)
                    ]
                ]

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

main : Program Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
