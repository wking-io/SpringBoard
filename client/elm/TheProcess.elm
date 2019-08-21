module TheProcess exposing (TheProcess, ProcessData, Preview, mock)

import Id exposing (Id)
import Time exposing (Posix)
import Html exposing (Html)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

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
  = Active ( Int, Int )
  | Inactive

mock : List (TheProcess Preview)
mock =
    [
        TheProcess
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
            , lastActivity = Time.millisToPosix 1565984035514
            , completions = 12
            , createdAt = Time.millisToPosix 1565984035514
            }
            (Active (12, 20))
    ,   TheProcess
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered."
            , lastActivity = Time.millisToPosix 1565984035514
            , completions = 12
            , createdAt = Time.millisToPosix 1565984035413
            }
            Inactive
    ]

getTitle : TheProcess a -> String
getTitle (TheProcess { title } _) =
  title

getDescription : TheProcess a -> String
getDescription (TheProcess { description } _) =
  description

getLink : TheProcess a -> String
getLink (TheProcess { id } _) =
  "replace with URL" ++ Id.toString id

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
  Html.div [ class (previewToClass preview "bg") ] [ Html.text (previewToString preview) ]

renderDetails : TheProcess Preview -> Html msg
renderDetails (TheProcess { completions } preview) =
  case preview of
    Active (completed, total) ->
      Html.div []
        [ Html.div []
          [ Html.div [] 
            [ Html.p [] [ Html.strong [] [ Html.text "Last Activity"] ]
            , Html.p [] [ Html.text "Date coming" ]
            ]
          , Html.div []
              [ Html.p [] [ Html.strong [] [ Html.text "Progress"] ]
              , Html.p [] [ Html.text (completed ++ "/" ++ total) ]
              ]
          ]
        ]

    Inactive ->
      Html.div []
        [ Html.div []
          [ Html.div [] 
            [ Html.p [] [ Html.strong [] [ Html.text "Last Completed"] ]
            , Html.p [] [ Html.text "Date coming" ]
            ]
          , Html.div []
              [ Html.p [] [ Html.strong [] [ Html.text "Completions"] ]
              , Html.p [] [ Html.text (String.fromInt completions) ]
              ]
          ]
        ]

renderPreview : TheProcess Preview -> Html msg
renderPreview process =
  Html.div [] 
  [ renderStatus process
  , Html.h3 [] [ Html.text (getTitle process) ]
  , Html.p [] [ Html.text (getDescription process) ]
  , renderDetails process
  , Html.a [ getLink process ] [ Html.text "Work On This Process" ]
  ]

