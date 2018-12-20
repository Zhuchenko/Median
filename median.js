function median(points){
    var centralPoint = getCentralPoint(points);
    var generator = generatorCP(centralPoint);
    var coefficients;

    if(points.length%2 === 0) {
        var index = findIndex(points, centralPoint);

        while (index != -1) {
            var nextCentralPoint = generator.next();
            centralPoint = {
                x: nextCentralPoint.value.x,
                y: nextCentralPoint.value.y
            };
            index = findIndex(points, centralPoint);
        }

        coefficients = evenNumberedLengthOfPoints(centralPoint);
    }
    else{
        index = findIndex(points, centralPoint);

        if (index > -1) {
            points.splice(index, 1);
            coefficients = evenNumberedLengthOfPoints(centralPoint);
        }
        else{
            coefficients = oddNumberedLengthOfPoints(centralPoint);
        }
    }

    return coefficients;

    function getCentralPoint(points) {
        var x = points.map(function(point) {
            return point.x;
        });

        var y = points.map(function(point) {
            return point.y;
        });

        return {
            x: arithmeticMiddling(x),
            y: arithmeticMiddling(y)
        };
    }

    function arithmeticMiddling(arguments) {
        var am = 0;
        for (var i in arguments) {
            am+=arguments[i];
        }
        am/=arguments.length;
        return Math.round(am);
    }

    function findIndex(points, point) {
        for(var i in points){
            if(points[i].x === point.x && points[i].y === point.y){
                return i;
            }
        }
        return -1;
    }

    function* generatorCP(centralPoint){
        var startPoint = centralPoint;

        var a = [0, 1, -1];
        var b = [1, -1];
        var a0 = 1;

        while(true){
            for(var i in a){
                for(var j in b) {

                    yield {
                        x: startPoint.x + a[i],
                        y: startPoint.y + b[j]
                    };

                    if(a[i] !== b[j] && a[i] !== -b[j]) {
                        yield {
                            x: startPoint.x + b[j],
                            y: startPoint.y + a[i]
                        };
                    }
                }
            }

            a0++;
            b = [a0, -a0];
            Array.prototype.push.apply(a, b);
        }
    }

    function evenNumberedLengthOfPoints(centralPoint){
        while(true) {
            var i = 0;

            while (i < 10000) {
                var k = getNew_k(1000);

                var x2 = getRandomPositiveInt(1000);
                var y2 = k * x2 - k * centralPoint.x + centralPoint.y;

                var point2 = {x: x2, y: y2};

                if (centralPoint.x === point2.x && centralPoint.y === point2.y) {
                    continue;
                }

                i++;

                if (checkLine(centralPoint, point2, points)) {
                    return {
                        k: k,
                        b: -k * centralPoint.x + centralPoint.y
                    }
                }
            }
        }

        do {
            var nextCentralPoint = generator.next();
            centralPoint = {
                x: nextCentralPoint.value.x,
                y: nextCentralPoint.value.y
            };
            var index = findIndex(points, centralPoint);
        } while (index !== -1)
    }

    function getNew_k(maximumModulo){
        var kIsLessThan1 = getRandomPositiveInt(2);

        if(kIsLessThan1){
            return getRandom(1);
        }
        else{
            return getRandomInt(maximumModulo);
        }
    }

    function getRandomPositiveInt(max){
        return Math.floor(Math.random() * max);
    }

    function getRandomInt(maximumModulo){
        return Math.floor(Math.random() * (2 * maximumModulo)) - maximumModulo;
    }

    function getRandom(maximumModulo){
        return Math.random() * (2 * maximumModulo) - maximumModulo;
    }

    function oddNumberedLengthOfPoints(centralPoint){
        for (var i in points) {
            if(checkLine(centralPoint, points[i], points)){
                var k = (points[i].y - centralPoint.y) / (points[i].x - centralPoint.x);
                return {
                    k: k,
                    b: - k*centralPoint.x + centralPoint.y
                }
            }
        }
    }

    function checkLine(pointOfLine1, pointOfLine2, points) {
        var left = 0;
        var right = 0;

        for (var i in points) {
            var D = calculateDistance(pointOfLine1, pointOfLine2, points[i]);

            if(D<0){
                left++;
            }

            if(D>0){
                right++;
            }
        }

        return left === right && left === Math.floor(points.length / 2);
    }

    function calculateDistance(pointOfLine1, pointOfLine2, point) {
        return (point.x-pointOfLine1.x)*(pointOfLine2.y-pointOfLine1.y) - (point.y-pointOfLine1.y)*(pointOfLine2.x-pointOfLine1.x);
    }
}

module.exports = median;