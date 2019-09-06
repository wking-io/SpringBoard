module Link exposing (Link, mock)


type Link
    = Link ( String, String )


mock : List Link
mock =
    [ Link ( "How to do this task", "https://google.com" )
    , Link ( "Link to blog text", "https://google.com" )
    ]
