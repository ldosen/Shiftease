"""

The actual scheduling algorithm
Query the database for the pertinent availability and gather the guides into a queue. 
Step through the schedule and try to schedule someone, checking the constraints to see if its possible. 
Remove the guide from the queue if they can be scheduled
Keep track of how many times people have been scheduled to enforce fairness
Update the database with the new schedule information
ML to make it good

"""
