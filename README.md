Dictionary:
* *AT* article-trainer application (this application)
* *ATB* article-trainer-backup application
* *User* - Person using AT
* *Question* - Displayed question to be answered
* *PossibleAnswer* - One of answers displayed next to *Question*
* *UserAnswer* - One of *PossibleAnswer*s selected by user
* *RightAnswer* - right answer to *Question*, must be one of *PossibleAnswer*s
* *RightAnswerPreviewDuration* - duration in millis how long *RightAnswer* and *StatisticsAnswers* will be displayed to *User* before replaced by next *Question* with *PossibleAnswer*s
* *StatisticsAnswers* - contains statistics for *Question* based on *UserAnswer*s
* *QuestionForm* - Displayed *Question* either with *PossibleAnswer*s to be answered or with *RightAnswer* and *StatisticsAnswer*s
* *AtbResToUserAnswer* - Is sent by *ATB* as response to *UserAnswer*, contains *RightAnswer* and *StatisticsAnswers* for old *Question* and new *Question*




When Application Start:

* Questions and PossibleAnswers are displayed

Select Question UseCase
* *User* click one of *PossibleAnswer*s which is then send as *UserAnswer* to *ATB*
* *ATB* send *AtbResToUserAnswer* back
* *RightAnswer* with *StatisticsAnswers* is displayed for *RightAnswerPreviewDuration* ms. After this period new *Question* with *PossibleAnswer*s is displayed.


Some Useful Links for Development:
https://facebook.github.io/jest/docs/en/timer-mocks.html