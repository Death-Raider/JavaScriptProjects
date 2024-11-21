// this code solves the differential equation of a pendelum
//if the pendelum starts at an agnle theta then how will theta
//change w.r.t time

var g = 9.8; // gravitational pull
var L = 0.2; //lenght of pedelum in Meter
var mu = 0.5; //resistance like friction, air resistance, etc
//keep mu = 0 for ideal case of pendelum
var m = 0.1; // mass of bob in KG
var THETA_0 = 90; //initial angle in degrees
var THETA_DOT_0 = 0 // angular velocity
var delta_t = 0.000001;//small timestep
var time_start = 0;//in seconds
var time_end = 60;//in seconds

do {
  console.log("time(in seconds) =",time_start,",Theta(time) =",theta_t(time_start),"degrees");
  time_start++;
} while (time_start<=time_end);
//the differential equation
function get_theta_double_dot(theta, theta_dot) {
  return  -mu*theta_dot - ((m*g)/L) * Math.sin(theta *  Math.PI/180);
}
// finding theta(t)
function theta_t(t){ // t = time in seconds
 theta = THETA_0;
 theta_dot = THETA_DOT_0;
for (let i = 0; i < t; i = i + delta_t) {
  theta_double_dot = get_theta_double_dot(theta, theta_dot);
  theta += theta_dot * delta_t;
  theta_dot += theta_double_dot * delta_t
}
  return theta;
}
