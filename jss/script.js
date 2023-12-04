$(document).ready(function(){
 
    // arc
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

// menu ul
    var line = function (t)
    {
        return {
            x: (1.0 - t) * 0.0 + t * 1000,
            y: 250.0
        };
    };

    var ellipse = function (t)
    {
        return {
            x: 500.0 + 200.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 250.0 + 150.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    var sine = function (t)
    {
        return {
            x:   0.0 + 1000.0 * t,
            y: 250.0 +  100.0 * Math.sin(3.0 * Math.PI * t)
        };
    };

    var dampedSine = function (t)
    {
        return {
            x:  25.0 + 950.0 * t,
            y: 250.0 + 200.0 * Math.exp(-2.0 * t) * Math.sin(3.0 * Math.PI * t)
        };
    };

    var powerSpiral = function (t)
    {
        var s = t + 1.0;

        return {
            x: 500.0 + 50.0 * Math.pow(s, 3.0) * Math.cos(6.0 * Math.PI * s - 0.5 * Math.PI),
            y: 250.0 + 50.0 * Math.pow(s, 3.0) * Math.sin(6.0 * Math.PI * s - 0.5 * Math.PI)
        };
    };

    var domain   = [0.0, 1.0],
        viewport = { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 };

    $('#text5').curvedText({
        curve:    line,
        domain:   domain,
        viewport: viewport,
        animate:  false
    });

    $('#line').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    line,
            domain:   domain,
            viewport: viewport,
            animate:  false
        });
    });

    $('#line-custom').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    line,
            domain:   domain,
            viewport: viewport,
            baseline: 0.8,
            animate:  false
        });
    });

    $('#line-no-scale').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    line,
            domain:   domain,
            viewport: viewport,
            scale:    false,
            animate:  false
        });
    });

    $('#ellipse-above').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    ellipse,
            domain:   domain,
            viewport: viewport,
            baseline: 'above'
        });
    });

    $('#ellipse-below').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    ellipse,
            domain:   domain,
            viewport: viewport,
            baseline: 'below'
        });
    });

    $('#ellipse-custom').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    ellipse,
            domain:   domain,
            viewport: viewport,
            baseline: 0.8
        });
    });

    $('#sine').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    sine,
            domain:   domain,
            viewport: viewport,
            duration: 2000
        });
    });

    $('#sine-no-rotation').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    sine,
            domain:   domain,
            viewport: viewport,
            rotate:   false,
            duration: 500
        });
    });

    $('#damped-sine').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    dampedSine,
            domain:   domain,
            viewport: viewport,
            baseline: 0.8,
            duration: 1000
        });
    });

    $('#damped-sine-no-scale').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    dampedSine,
            domain:   domain,
            viewport: viewport,
            baseline: 0.8,
            scale:    false,
            duration: 1000
        });
    });

    $('#power-spiral').click(function (e)
    {
        e.preventDefault();

        $('#text5').curvedText({
            curve:    powerSpiral,
            domain:   domain,
            viewport: viewport,
            baseline: 0.8,
            scale:    false,
            duration: 2000
        });
    });
    
});