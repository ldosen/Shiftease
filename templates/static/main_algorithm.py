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

total_shifts = 4

raw_availabilities = [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0]

# we also get the headings from the table so we can have something to output into the schedule

employees = ["Luke", "George", "Zac"]

# As well as the target number of shifts per time period per person. in a realistic scenario, this would be
# a larger number given the context would be a week instead 2 days/a weekend.
# Also, realistically, there would be conflicts in target shift # per week for each employee, ie not everyone's
# ideal number can be met. We ain't there yet, so for beginning dev purposes this one happens to fit perfectly.

target_shifts = [7, 1, 2]


# Step 1.2: Sort the employees into a priority queue based on target # of shifts.
# TO-DO: if two employees have same number of target shifts, sort those by number of available slots per person.

employees_dict = {}
avbl_index = 0
emp_index = 0

for employee in employees:
    employees_dict[employee] = [target_shifts[emp_index],
                                raw_availabilities[avbl_index: avbl_index + total_shifts]]
    avbl_index += total_shifts
    emp_index += 1

# Sort employees list by selection sort (almost directly copied from GeeksForGeeks implementation)
for i in range(len(employees)):
    # Find the minimum element in remaining
    # unsorted array
    min_idx = i
    for j in range(i+1, len(employees)):
        if employees_dict[employees[min_idx]][0] > employees_dict[employees[j]][0]:
            min_idx = j

    # Swap the found minimum element with
    # the first element
    employees[i], employees[min_idx] = employees[min_idx], employees[i]

ordered_employees = employees
employees_queue = queue.Queue(maxsize=len(employees))

for emp in ordered_employees:
    employees_queue.put(emp)

# Step 2: Step through the schedule and try to schedule someone, checking the constraints to see if its possible.
# Step 3: Remove the guide from the queue if they can be scheduled
# Step 4: Keep track of how many times people have been scheduled to enforce fairness
# Step 5: Update the database with the new schedule information
# Step 6: ML to make it good


def main():
    print("employees_queue values:")
    while not employees_queue.empty():
        print(employees_queue.get())


if __name__ == '__main__':
    main()
