// Stephen Dunn, 11/24/13
// This algorithm constructs a smooth curve from a set of starting points
// See it live: https://www.khanacademy.org/computer-programming/chaikins-smoothing-algorithm/2654611482
// Repo: https://github.com/entangledloops/chaikins-smoothing

var npoints = random(40,70);
var x = [npoints];
var y = [npoints];
var r = random(50,255); var g = random(100,255); var b = random(100);

y[0]=400; x[0]=0;
for (var i=1; i<npoints; i++)
{
    y[i] = random(400);
    x[i] = random(x[i-1],15+random(60)+x[i-1]);
}

strokeWeight(2.0);
for (var i=0; i<npoints-1; i++)
{
    stroke(r,g,b);
    line(x[i], y[i], x[i+1], y[i+1]);
}

for (var s=0; s<20; s++)
{
    var nx = [npoints]; var ny = [npoints];
    for (var i=0; i<npoints-1; i++)
    {
        var slope = (y[i+1]-y[i])/(x[i+1]-x[i]);
        var angle = atan(slope);
        var c = sqrt( pow(x[i+1]-x[i],2) + pow(y[i+1]-y[i],2) );
        var w = cos(angle)*c; var h = sin(angle)*c;
    
        nx[i] = x[i]+w*0.25; ny[i] = y[i]+h*0.25; 
        nx[i+1] = x[i+1]+w*0.75; ny[i+1] = y[i+1]+h*0.75;
    }
    x=nx; y=ny;
    for (var i=0; i<npoints-1; i++)
    {
        stroke(r-pow(0.7*(s+1),2),g-pow(0.7*(s+1),2),b+pow(s+1,4));
        line(nx[i],ny[i],nx[i+1],ny[i+1]);
    }
}
