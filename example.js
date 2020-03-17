log("Welcome to a new online simulated terminal!");

// Example Command - Hey

register_cmd("hey", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    for (var i = 0; i < parameters.length; i++) {
        block_log("Hello " + parameters[i]);
    }
});

// Example Command - Sum

register_cmd("sum", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    var sum = 0;
    for (var i = 0; i < parameters.length; i++) {
        sum += parseInt(parameters[i]);
    }
    block_log("Sum: " + sum);
});

update_user_title("John Smith");