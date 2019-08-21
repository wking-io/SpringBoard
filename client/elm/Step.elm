module Step exposing (Board, Step, StepData)

import Id exposing (Id)
import Link exposing (Link)

type alias Board = List Step

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