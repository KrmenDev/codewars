// [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated

// Type: Bug 🪳
// Priority: Major
// Component: Operational Logistics Software
// Reporter: maverick
// Assignee: Assigned to you
// Bug Description

// Pilots have reported discrepancies in their flight logs after returning from interception missions. The travel distance logged in the logistics software does not match actual flight paths, potentially leading to incorrect fuel calculations and errors in planning of future missions.
// Steps to Reproduce

//     Deploy an interceptor to engage a UFO.
//     Upon its return, note the average speed (given in knots) and travel time (in minutes) reported by onboard instruments.
//     Enter the values into the Logistics and Planning System.
//     Expected result: The system should correctly compute the distance in kilometers.
//     Actual result: The logged distance appears inaccurate.

// Impact

// If not fixed, this could cause interceptors to run out of fuel mid-mission, leaving Earth vulnerable to alien attacks. On the other hand, if the system overestimates travel distance, interceptors may be overfueled, making them heavier than necessary. This reduces maneuverability, increases takeoff time, and could put pilots at a disadvantage during high-speed engagements with alien craft.

// The Flight Operations team has requested an immediate fix.
// Task

// Investigate and fix the bug in the travel distance calculation function.


//two params, always numbers, always positive, never empty or negative
// return the knots traveled in kms
//0,0 => 0
// 600, 60 => 1111.2
//800, 60 => 1481.6
//knot * km/h (1.852)


// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
    const KM_PER_MILE = 1.852;
    const travelHours = travelTime / 60; 
    const travelMiles = avgSpeed * travelHours; 
    const travelKms   = travelMiles * KM_PER_MILE;
    
    return travelKms;
  }


  
//Codewars
function travelDistance(avgSpeedKnots, travelTimeMinutes) {
    const KM_PER_KNOT = 1.852;
    const travelTimeHours = travelTimeMinutes / 60;
    const traveledKnots = avgSpeedKnots * travelTimeHours;
    const traveledKms = traveledKnots * KM_PER_KNOT;
    return traveledKms;
}


//Codewars
function travelDistance(avgSpeed, travelTime) {

    let kmh=1.852*avgSpeed
    let time= travelTime/60
    return kmh*time
    }


//Codewars
function travelDistance(avgSpeed, travelTime) {
    return 1.852 * avgSpeed * travelTime / 60;
  }