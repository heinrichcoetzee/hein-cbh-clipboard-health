# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket #1

## UX -> Design a way for facilities to assign custom Ids to Agents

Add a figma design mockup of a User Experience that makes sense for a facility manager to add
a custom id called reporting id.

Please add this in a place on the agent edit view where it makes sense to do so.

Acceptance Criteria

- Link to a figma mockup or attach a pdf of the design.
  Time/Effort
- 2 hours

Ticket #2

## UI -> Create a way for facilities to assign custom Ids to Agents

As a Facility manager I would like the ability to add a custom id for each agent for reporting purposes.

Implement the additional input as per design, (referenced in Ticket #1) on the agent edit view so managers can add or edit a reporting id.

Acceptance Criteria

- The input is as per design
- Typing a text value in the id displays the value of the id in the input.
  Time/Effort
- 3 hours

Ticket #3

## Implementation -> Implement reporting id on agent view to be passed to the endpoint

As a Facility manager I would like the ability to add a custom id for each agent for reporting purposes.

Add a new property in the interfaces and api request for editing agents so the newly added property called reportingId is included in the body of the request to the specified endpoint.

Acceptance Criteria

- There should be a new property on the agent interface
- Clicking save on the agent edit view should include the newly typed reporting id to the backend endpoint.
  Time/Effort
- 4 hours

Ticket #4

## Backend -> Update Data Schema to allow new property on Agent

As a Facility manager I would like the ability to add a custom id for each agent for reporting purposes.

- Add a new property on the Agents Collection called reportingId.
- Ensure that the newly added property is collected and stored in the database when the saveAgent endpoint is called
- Ensure the newly added property is included in the get request when a agent is fetched

Acceptance Criteria

- When a user saves the agent with an additional reportingId, the value should be updated in the database.
- Calling the update Endpoint then calling the get function should return the newly added and updated property
  Time/Effort
- 6 hours

Ticket #5

## Backend -> Reporting pdf to use newly added field.

As a Facility manager I would like the ability to add a custom id for each agent for reporting purposes.
The reporting id should be displayed on the pdf rather than the agents user id

- Update the generateReport function to show the reportingId of the agent not the agent user id on the pdf.

Acceptance Criteria

- When the generateReport function is called. Ensure the reporting id displays on the pdf instead of the user id of the agent.
  Time/Effort
- 6 hours
