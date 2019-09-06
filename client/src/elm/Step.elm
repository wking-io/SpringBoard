module Step exposing (Board, Step, StepData, mock)

import Id exposing (Id)
import Link exposing (Link)


type Board
    = Board (List Step)
    | Edit Id StepFormData (List Step)
    | Create StepFormData (List Step)
    | Delete Id (List Step)


type Step
    = Todo StepData
    | InProgress StepData
    | Done StepData


type alias StepData =
    { id : Id
    , title : String
    , description : String
    , links : List Link
    }


type alias StepFormData =
    { title : String
    , description : String
    , links : List Link
    }


mock : Board
mock =
    Board
        [ Todo
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "This is a description for this task that only shows when the task is in todo state for this thing."
            , links = Link.mock
            }
        , Todo
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "This is a description for this task that only shows when the task is in todo state for this thing."
            , links = Link.mock
            }
        , Todo
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "This is a description for this task that only shows when the task is in todo state for this thing."
            , links = Link.mock
            }
        , InProgress
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "This is a description for this task that only shows when the task is in todo state for this thing."
            , links = Link.mock
            }
        , Done
            { id = Id.mock
            , title = "Weekly blog update for MegaMaker Community article"
            , description = "This is a description for this task that only shows when the task is in todo state for this thing."
            , links = Link.mock
            }
        ]
