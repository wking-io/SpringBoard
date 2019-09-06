module TheProcess exposing (Preview, ProcessData, TheProcess, detailMock, previewMock, renderPreview)

import Html exposing (Attribute, Html)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Id exposing (Id)
import Step exposing (Board, Step)
import Time exposing (Posix)


type TheProcess extraInfo
    = TheProcess ProcessData extraInfo


type alias ProcessData =
    { id : Id
    , title : String
    , description : String
    , completions : Int
    , createdAt : Posix
    , lastActivity : Posix
    }


type Preview
    = Active ( Int, Int ) -- Look into opaque type for removing impossible state 13 / 10
    | Inactive


type Detail
    = Interactive Board
    | Edit Board ProcessFormData


type alias ProcessFormData =
    { title : String
    , description : String
    }


previewMock : List (TheProcess Preview)
previewMock =
    [ TheProcess
        { id = Id.mock
        , title = "Weekly blog update for MegaMaker Community article"
        , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
        , lastActivity = Time.millisToPosix 1565984035514
        , completions = 12
        , createdAt = Time.millisToPosix 1565984035514
        }
        (Active ( 12, 20 ))
    , TheProcess
        { id = Id.mock
        , title = "Weekly blog update for MegaMaker Community article"
        , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
        , lastActivity = Time.millisToPosix 1565984035514
        , completions = 12
        , createdAt = Time.millisToPosix 1565984035413
        }
        Inactive
    , TheProcess
        { id = Id.mock
        , title = "Weekly blog update for MegaMaker Community article"
        , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
        , lastActivity = Time.millisToPosix 1565984035514
        , completions = 12
        , createdAt = Time.millisToPosix 1565984035514
        }
        (Active ( 12, 20 ))
    , TheProcess
        { id = Id.mock
        , title = "Weekly blog update for MegaMaker Community article"
        , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
        , lastActivity = Time.millisToPosix 1565984035514
        , completions = 12
        , createdAt = Time.millisToPosix 1565984035413
        }
        Inactive
    ]


detailMock : TheProcess Detail
detailMock =
    TheProcess
        { id = Id.mock
        , title = "Weekly blog update for MegaMaker Community article"
        , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
        , lastActivity = Time.millisToPosix 1565984035514
        , completions = 12
        , createdAt = Time.millisToPosix 1565984035514
        }
        (Interactive Step.mock)


getTitle : TheProcess a -> String
getTitle (TheProcess { title } _) =
    title


getDescription : TheProcess a -> String
getDescription (TheProcess { description } _) =
    description


getLink : String -> TheProcess a -> Attribute msg
getLink url (TheProcess { id } _) =
    href (url ++ Id.toString id)


getSteps : TheProcess Detail -> List Step
getSteps (TheProcess _ details) =
    case details of
        Interactive steps ->
            steps

        Edit steps _ ->
            steps


previewToString : Preview -> String
previewToString preview =
    case preview of
        Active _ ->
            "Active"

        Inactive ->
            "Inactive"


previewToClass : Preview -> String -> String
previewToClass preview prefix =
    case preview of
        Active _ ->
            prefix ++ "-primary-dark"

        Inactive ->
            prefix ++ "-grey-400"


renderStatus : TheProcess Preview -> Html msg
renderStatus (TheProcess _ preview) =
    Html.div [ class ("inline-block text-white font-bold py-1 px-2 rounded text-xs leading-none mb-4 " ++ previewToClass preview "bg") ] [ Html.text (previewToString preview) ]


renderDetails : TheProcess Preview -> Html msg
renderDetails (TheProcess { completions } preview) =
    case preview of
        Active ( completed, total ) ->
            Html.div [ class "flex space-between" ]
                [ Html.div [ class "w-1/2" ]
                    [ Html.p [] [ Html.strong [] [ Html.text "Last Activity" ] ]
                    , Html.p [ class "text-gray-600" ] [ Html.text "Date coming" ]
                    ]
                , Html.div []
                    [ Html.p [] [ Html.strong [] [ Html.text "Progress" ] ]
                    , Html.p [ class "text-gray-600" ] [ Html.text (String.fromInt completed ++ "/" ++ String.fromInt total) ]
                    ]
                ]

        Inactive ->
            Html.div [ class "flex space-between" ]
                [ Html.div [ class "w-1/2" ]
                    [ Html.p [] [ Html.strong [] [ Html.text "Last Completed" ] ]
                    , Html.p [ class "text-gray-600" ] [ Html.text "Date coming" ]
                    ]
                , Html.div []
                    [ Html.p [] [ Html.strong [] [ Html.text "Completions" ] ]
                    , Html.p [ class "text-gray-600" ] [ Html.text (String.fromInt completions) ]
                    ]
                ]


renderPreview : String -> TheProcess Preview -> Html msg
renderPreview url process =
    Html.div [ class "sb-process flex flex-col text-sans" ]
        [ Html.div [ class "p-6 flex-1" ]
            [ renderStatus process
            , Html.h3 [ class "text-base font-bold mb-2 leading-tight" ] [ Html.text (getTitle process) ]
            , Html.p [ class "text-gray-600 mb-4" ] [ Html.text (getDescription process) ]
            , renderDetails process
            ]
        , Html.a [ class "bg-black text-white w-full p-3 text-center block font-medium hover:text-white hover:bg-grey-800", getLink url process ] [ Html.text "Work On This Process" ]
        ]
