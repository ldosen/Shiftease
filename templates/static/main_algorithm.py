import queue

# The actual scheduling algorithm
# __________________________________

# Step 1.1: Query the database for the pertinent availability into a list.

"""
Luke is going to take care of querying the database. The following code is an example return from database queries -
a 1d list, probably in the order of the database itself. The order I expect is list[0] through
list[x] is the elements for all of the availability slots for person 1. Person 2's availability then
is list[x+1] through list[2x], and so on.
"""

# In this example list, we are trying to schedule 3 people over 2 days, with 2 possible shifts on each day.
# As such we have 12 data points, 4 per person ie 2 per person per day

raw_availabilities = [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0]

# we also get the headings from the table so we can have something to output into the schedule

employees = ["Luke", "George", "Zac"]

# As well as the target number of shifts per time period per person. in a realistic scenario, this would be
# a larger number given the context would be a week instead 2 days/a weekend.
# Also, realistically, there would be conflicts in target shift # per week for each employee, ie not everyone's
# ideal number can be met. We ain't there yet, so for beginning dev purposes this one happens to fit perfectly.

target_shifts = [1, 1, 2]


# Step 1.2: Sort the employees into a priority queue based on target # of shifts, and after that based on
# # of available slots.


# Step 2: Step through the schedule and try to schedule someone, checking the constraints to see if its possible.
# Step 3: Remove the guide from the queue if they can be scheduled
# Step 4: Keep track of how many times people have been scheduled to enforce fairness
# Step 5: Update the database with the new schedule information
# Step 6: ML to make it good
