/*
metadata.js

    Author      :   Helio Tejeda
    University  :   University of California, Irvine
    Lab         :   Modeling and Decision-Making Lab (MADLAB)

Experimental METADATA file.

This file should contain static experimental metadata such as:
    - Experiment Name
    -
    -
    -
*/

/*
    METADATA
*/
// DEBUG MODE
var DEBUG = true;   // Always start coding in DEBUG mode

//      Experiment Name
var EXPERIMENT_NAME             = "Target Intercept Game";
var EXPERIMENT_DATABASE_NAME    = "uci-hri-experiment-1";    // Make sure to change this to your database name!

//      Section Headers
var SECTION_TITLE_CONSENT_PAGE  = "Consent Page";
var SECTION_TITLE_INSTRUCTIONS  = "Instructions";
var SECTION_TITLE_QUIZ          = "Comprehension Check"; // OR "Comprehension Quiz";
//var SECTION_TITLE_EXPERIMENT    = "Experiment";   // This was removed to have additional space for experiment interface
var SECTION_TITLE_COMPLETION    = "Task Completed";


$(document).ready(function (){
    /*
        Insert METADATA into page appropriately :)
    */
    //      Experiment Name
    $('#experiment-title').html(EXPERIMENT_NAME);

    //      Section Headers
    $('#consent-header').html(SECTION_TITLE_CONSENT_PAGE);
    $('#instructions-header').html(SECTION_TITLE_INSTRUCTIONS);
    $('#comprehension-quiz-header').html(SECTION_TITLE_QUIZ);
    //$('#task-header').html(SECTION_TITLE_EXPERIMENT);
    $('#experiment-complete-header').html(SECTION_TITLE_COMPLETION);
});