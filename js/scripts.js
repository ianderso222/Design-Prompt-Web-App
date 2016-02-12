var messages = ["single column", "two column", "three column", "left aligned", "center aligned", "minimal", "javascript free", "split screen", "single screen", "card based"],
    message = messages[Math.floor(Math.random() * messages.length)];
$('#type').append(message);

var messages = ["an apiarist", "a monastery", "an auto dealer", "a metal band", "a bakery", "a taco truck", "a designer's portfolio", "a politician", "apples", "a lawyer", "a dentist", "a tech startup", "a travel blog", "a near mountain", "a skateboard company", "a brewery", "a resume", "a video game", "a camera", "an interior designer", "a running shoe"],
    message = messages[Math.floor(Math.random() * messages.length)];
$('#what').append(message);

var messages = ["black and white", "light grey", "blue", "green", "yellow", "cool", "warm", "complementary", "triadic", "monochromatic", "lime green", "red and white", "orange", "purple", "rainbow", "tetradic", "split-complementary", "yellow", "dull", "bright", "analogous"],
    message = messages[Math.floor(Math.random() * messages.length)];
$('#color').append(message);

var messages = ["fixed background", "fullscreen background", "parallax header", "fullscreen header", "pop-out menu", "svg animation", "loading animation", "hover animation", "drop shadow", "subtle color gradient", "drastic color gradient", "clickable button", "material design"],
    message = messages[Math.floor(Math.random() * messages.length)];
$('#featuring').append(message);
