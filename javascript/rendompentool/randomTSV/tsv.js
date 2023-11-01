function tsvFun() {
    // var options = this.options.get();
    var cols = document.getElementById("cols").value;
    console.log("cols", cols)
    var rows = document.getElementById("rows").value;
    console.log("rows", rows)

    var english = false;
    var random = false;
    var radios = document.getElementsByName('option-group');
    for (var radio of radios) {
        if (radio.checked) {
            if (radio.value == "english-strings") {
                english = true;
            }
            if (radio.value == "random-strings") {
                random = true;
            }
        }
    }
    console.log("english", english);
    console.log("random", random);
    // var english = document.getElementById("english-strings");
    // var minLength = document.getElementById("min-string-length").value;
    var minLength = "";
    var maxLength = document.getElementById("max-string-length").value;
    console.log("maxLength", maxLength)
    var alphabet = document.getElementById("string-alphabet").value;
    console.log("alphabet", alphabet)
    if (isNaN(cols) || cols <= 0) {
        this.output.showNegativeBadge("Can't generate", "\"" + cols + "\" is not a valid column count.");
        return "";
    }
    if (isNaN(rows) || rows <= 0) {
        this.output.showNegativeBadge("Can't generate", "\"" + rows + "\" is not a valid row count.");
        return "";
    }
    if (!english) {
        if (isNaN(minLength) || minLength < 0) {
            this.output.showNegativeBadge("Can't generate", "\"" + minLength + "\" is not a valid string length.");
            return "";
        }
        if (isNaN(maxLength) || maxLength < 0) {
            this.output.showNegativeBadge("Can't generate", "\"" + maxLength + "\" is not a valid string length.");
            return "";
        }
        if (minLength > maxLength) {
            this.output.showNegativeBadge("Can't generate", "Minimum string length is bigger than maximum string length.");
            return "";
        }
        if (!alphabet) {
            this.output.showNegativeBadge("Can't generate", "Invalid random string alphabet.");
            return "";
        }
    }
    var opts = {
        english: english,
        minLength: parseInt(minLength),
        maxLength: parseInt(maxLength),
        alphabet: alphabet
    };
    var json = [];
    var quote = document.getElementById("quote").checked;
    for (var row = 0; row < rows; row++) {
        var line = "";
        for (var col = 0; col < cols; col++) {
            var field = randomString(opts);
            if (quote) {
                field = '"' + field + '"';
            }
            line = line + field;
            if (col != cols - 1) {
                line += "\t";
            }
        }
        json.push(line);
    }
    var tsv = json.join("\n");
    //  return tsv;
     var answer = tsv;
     document.getElementById("answer").value = answer;

   
}
function randomString(opts) {
    if (opts.english) {
        return WordDictionary.random();
    } else {
        var str = "";
        var length = opts.minLength + parseInt(Math.random() * (opts.maxLength - opts.minLength + 1));
        for (var i = 0; i < length; i++) {
            str += chooseOne(opts.alphabet);
        }
        return str;
    }
}
function chooseOne(choices) {
    return choices[parseInt(Math.random() * choices.length)];
}





var WordDictionary = {
    words: ["ability", "able", "aboard", "about", "above", "accept", "accident", "according", "account", "accurate", "acres", "across", "act", "action", "active", "activity", "actual", "actually", "add", "addition", "additional", "adjective", "adult", "adventure", "advice", "affect", "afraid", "after", "afternoon", "again", "against", "age", "ago", "agree", "ahead", "aid", "air", "airplane", "alike", "alive", "all", "allow", "almost", "alone", "along", "aloud", "alphabet", "already", "also", "although", "am", "among", "amount", "ancient", "angle", "angry", "animal", "announced", "another", "answer", "ants", "any", "anybody", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "appearance", "apple", "applied", "appropriate", "are", "area", "arm", "army", "around", "arrange", "arrangement", "arrive", "arrow", "art", "article", "as", "aside", "ask", "asleep", "at", "ate", "atmosphere", "atom", "atomic", "attached", "attack", "attempt", "attention", "audience", "author", "automobile", "available", "average", "avoid", "aware", "away", "baby", "back", "bad", "badly", "bag", "balance", "ball", "balloon", "band", "bank", "bar", "bare", "bark", "barn", "base", "baseball", "basic", "basis", "basket", "bat", "battle", "be", "bean", "bear", "beat", "beautiful", "beauty", "became", "because", "become", "becoming", "bee", "been", "before", "began", "beginning", "begun", "behavior", "behind", "being", "believed", "bell", "belong", "below", "belt", "bend", "beneath", "bent", "beside", "best", "bet", "better", "between", "beyond", "bicycle", "bigger", "biggest", "bill", "birds", "birth", "birthday", "bit", "bite", "black", "blank", "blanket", "blew", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bone", "book", "border", "born", "both", "bottle", "bottom", "bound", "bow", "bowl", "box", "boy", "brain", "branch", "brass", "brave", "bread", "break", "breakfast", "breath", "breathe", "breathing", "breeze", "brick", "bridge", "brief", "bright", "bring", "broad", "broke", "broken", "brother", "brought", "brown", "browserling", "brush", "buffalo", "build", "building", "built", "buried", "burn", "burst", "bus", "bush", "business", "busy", "but", "butter", "buy", "by", "cabin", "cage", "cake", "call", "calm", "came", "camera", "camp", "can", "canal", "cannot", "cap", "capital", "captain", "captured", "car", "carbon", "card", "care", "careful", "carefully", "carried", "carry", "case", "cast", "castle", "cat", "catch", "cattle", "caught", "cause", "cave", "cell", "cent", "center", "central", "century", "certain", "certainly", "chain", "chair", "chamber", "chance", "change", "changing", "chapter", "character", "characteristic", "charge", "chart", "check", "cheese", "chemical", "chest", "chicken", "chief", "child", "children", "choice", "choose", "chose", "chosen", "church", "circle", "circus", "citizen", "city", "class", "classroom", "claws", "clay", "clean", "clear", "clearly", "climate", "climb", "clock", "close", "closely", "closer", "cloth", "clothes", "clothing", "cloud", "club", "coach", "coal", "coast", "coat", "coffee", "cold", "collect", "college", "colony", "color", "column", "combination", "combine", "come", "comfortable", "coming", "command", "common", "community", "company", "compare", "compass", "complete", "completely", "complex", "composed", "composition", "compound", "concerned", "condition", "congress", "connected", "consider", "consist", "consonant", "constantly", "construction", "contain", "continent", "continued", "contrast", "control", "conversation", "cook", "cookies", "cool", "copper", "copy", "corn", "corner", "correct", "correctly", "cost", "cotton", "could", "count", "country", "couple", "courage", "course", "court", "cover", "cow", "cowboy", "crack", "cream", "create", "creature", "crew", "crop", "cross", "crowd", "cry", "cup", "curious", "current", "curve", "customs", "cut", "cutting", "daily", "damage", "dance", "danger", "dangerous", "dark", "darkness", "date", "daughter", "dawn", "day", "dead", "deal", "dear", "death", "decide", "declared", "deep", "deeply", "deer", "definition", "degree", "depend", "depth", "describe", "desert", "design", "desk", "detail", "determine", "develop", "development", "diagram", "diameter", "did", "die", "differ", "difference", "different", "difficult", "difficulty", "dig", "dinner", "direct", "direction", "directly", "dirt", "dirty", "disappear", "discover", "discovery", "discuss", "discussion", "disease", "dish", "distance", "distant", "divide", "division", "do", "doctor", "does", "dog", "doing", "doll", "dollar", "done", "donkey", "door", "dot", "double", "doubt", "down", "dozen", "draw", "drawn", "dream", "dress", "drew", "dried", "drink", "drive", "driven", "driver", "driving", "drop", "dropped", "drove", "dry", "duck", "due", "dug", "dull", "during", "dust", "duty", "each", "eager", "ear", "earlier", "early", "earn", "earth", "easier", "easily", "east", "easy", "eat", "eaten", "edge", "education", "effect", "effort", "egg", "eight", "either", "electric", "electricity", "element", "elephant", "eleven", "else", "empty", "end", "enemy", "energy", "engine", "engineer", "enjoy", "enough", "enter", "entire", "entirely", "environment", "equal", "equally", "equator", "equipment", "escape", "especially", "essential", "establish", "even", "evening", "event", "eventually", "ever", "every", "everybody", "everyone", "everything", "everywhere", "evidence", "exact", "exactly", "examine", "example", "excellent", "except", "exchange", "excited", "excitement", "exciting", "exclaimed", "exercise", "exist", "expect", "experience", "experiment", "explain", "explanation", "explore", "express", "expression", "extra", "eye", "face", "facing", "fact", "factor", "factory", "failed", "fair", "fairly", "fall", "fallen", "familiar", "family", "famous", "far", "farm", "farmer", "farther", "fast", "fastened", "faster", "fat", "father", "favorite", "fear", "feathers", "feature", "fed", "feed", "feel", "feet", "fell", "fellow", "felt", "fence", "few", "fewer", "field", "fierce", "fifteen", "fifth", "fifty", "fight", "fighting", "figure", "fill", "film", "final", "finally", "find", "fine", "finest", "finger", "finish", "fire", "fireplace", "firm", "first", "fish", "five", "fix", "flag", "flame", "flat", "flew", "flies", "flight", "floating", "floor", "flow", "flower", "fly", "fog", "folks", "follow", "food", "foot", "football", "for", "force", "foreign", "forest", "forget", "forgot", "forgotten", "form", "former", "fort", "forth", "forty", "forward", "fought", "found", "four", "fourth", "fox", "frame", "free", "freedom", "frequently", "fresh", "friend", "friendly", "frighten", "frog", "from", "front", "frozen", "fruit", "fuel", "full", "fully", "fun", "function", "funny", "fur", "furniture", "further", "future", "gain", "game", "garage", "garden", "gas", "gasoline", "gate", "gather", "gave", "general", "generally", "gentle", "gently", "get", "getting", "giant", "gift", "girl", "give", "given", "giving", "glad", "glass", "globe", "go", "goes", "gold", "golden", "gone", "good", "goose", "got", "government", "grabbed", "grade", "gradually", "grain", "grandfather", "grandmother", "graph", "grass", "gravity", "gray", "great", "greater", "greatest", "greatly", "green", "grew", "ground", "group", "grow", "grown", "growth", "guard", "guess", "guide", "gulf", "gun", "habit", "had", "hair", "half", "halfway", "hall", "hand", "handle", "handsome", "hang", "happen", "happened", "happily", "happy", "harbor", "hard", "harder", "hardly", "has", "hat", "have", "having", "hay", "he", "headed", "heading", "health", "heard", "hearing", "heart", "heat", "heavy", "height", "held", "hello", "help", "helpful", "her", "herd", "here", "herself", "hidden", "hide", "high", "higher", "highest", "highway", "hill", "him", "himself", "his", "history", "hit", "hold", "hole", "hollow", "home", "honor", "hope", "horn", "horse", "hospital", "hot", "hour", "house", "how", "however", "huge", "human", "hundred", "hung", "hungry", "hunt", "hunter", "hurried", "hurry", "hurt", "husband", "ice", "idea", "identity", "if", "ill", "image", "imagine", "immediately", "importance", "important", "impossible", "improve", "in", "inch", "include", "including", "income", "increase", "indeed", "independent", "indicate", "individual", "industrial", "industry", "influence", "information", "inside", "instance", "instant", "instead", "instrument", "interest", "interior", "into", "introduced", "invented", "involved", "iron", "is", "island", "it", "its", "itself", "jack", "jar", "jet", "job", "join", "joined", "journey", "joy", "judge", "jump", "jungle", "just", "keep", "kept", "key", "kids", "kill", "kind", "kitchen", "knew", "knife", "know", "knowledge", "known", "label", "labor", "lack", "lady", "laid", "lake", "lamp", "land", "language", "large", "larger", "largest", "last", "late", "later", "laugh", "law", "lay", "layers", "lead", "leader", "leaf", "learn", "least", "leather", "leave", "leaving", "led", "left", "leg", "length", "lesson", "let", "letter", "level", "library", "lie", "life", "lift", "light", "like", "likely", "limited", "line", "lion", "lips", "liquid", "list", "listen", "little", "live", "living", "load", "local", "locate", "location", "log", "lonely", "long", "longer", "look", "loose", "lose", "loss", "lost", "lot", "loud", "love", "lovely", "low", "lower", "luck", "lucky", "lunch", "lungs", "lying", "machine", "machinery", "mad", "made", "magic", "magnet", "mail", "main", "mainly", "major", "make", "making", "man", "managed", "manner", "manufacturing", "many", "map", "mark", "market", "married", "mass", "massage", "master", "material", "mathematics", "matter", "may", "maybe", "me", "meal", "mean", "means", "meant", "measure", "meat", "medicine", "meet", "melted", "member", "memory", "men", "mental", "merely", "met", "metal", "method", "mice", "middle", "might", "mighty", "mile", "military", "milk", "mill", "mind", "mine", "minerals", "minute", "mirror", "missing", "mission", "mistake", "mix", "mixture", "model", "modern", "molecular", "moment", "money", "monkey", "month", "mood", "moon", "more", "morning", "most", "mostly", "mother", "motion", "motor", "mountain", "mouse", "mouth", "move", "movement", "movie", "moving", "mud", "muscle", "music", "musical", "must", "my", "myself", "mysterious", "nails", "name", "nation", "national", "native", "natural", "naturally", "nature", "near", "nearby", "nearer", "nearest", "nearly", "necessary", "neck", "needed", "needle", "needs", "negative", "neighbor", "neighborhood", "nervous", "nest", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "no", "nobody", "nodded", "noise", "none", "noon", "nor", "north", "nose", "not", "note", "noted", "nothing", "notice", "noun", "now", "number", "numeral", "nuts", "object", "observe", "obtain", "occasionally", "occur", "ocean", "of", "off", "offer", "office", "officer", "official", "oil", "old", "older", "oldest", "on", "once", "one", "only", "onlinetools", "onto", "open", "operation", "opinion", "opportunity", "opposite", "or", "orange", "orbit", "order", "ordinary", "organization", "organized", "origin", "original", "other", "ought", "our", "ourselves", "out", "outer", "outline", "outside", "over", "own", "owner", "oxygen", "pack", "package", "page", "paid", "pain", "paint", "pair", "palace", "pale", "pan", "paper", "paragraph", "parallel", "parent", "park", "part", "particles", "particular", "particularly", "partly", "parts", "party", "pass", "passage", "past", "path", "pattern", "pay", "peace", "pen", "pencil", "people", "per", "percent", "perfect", "perfectly", "perhaps", "period", "person", "personal", "pet", "phrase", "physical", "piano", "pick", "picture", "pictured", "pie", "piece", "pig", "pile", "pilot", "pine", "pink", "pipe", "pitch", "place", "plain", "plan", "plane", "planet", "planned", "planning", "plant", "plastic", "plate", "plates", "play", "pleasant", "please", "pleasure", "plenty", "plural", "plus", "pocket", "poem", "poet", "poetry", "point", "pole", "police", "policeman", "political", "pond", "pony", "pool", "poor", "popular", "population", "porch", "port", "position", "positive", "possible", "possibly", "post", "pot", "potatoes", "pound", "pour", "powder", "power", "powerful", "practical", "practice", "prepare", "present", "president", "press", "pressure", "pretty", "prevent", "previous", "price", "pride", "primitive", "principal", "principle", "printed", "private", "prize", "probably", "problem", "process", "produce", "product", "production", "program", "progress", "promised", "proper", "properly", "property", "protection", "proud", "prove", "provide", "public", "pull", "pupil", "pure", "purple", "purpose", "push", "put", "putting", "quarter", "queen", "question", "quick", "quickly", "quiet", "quietly", "quite", "rabbit", "race", "radio", "railroad", "rain", "raise", "ran", "ranch", "range", "rapidly", "rate", "rather", "raw", "rays", "reach", "read", "reader", "ready", "real", "realize", "rear", "reason", "recall", "receive", "recent", "recently", "recognize", "record", "red", "refer", "refused", "region", "regular", "related", "relationship", "religious", "remain", "remarkable", "remember", "remove", "repeat", "replace", "replied", "report", "represent", "require", "research", "respect", "rest", "result", "return", "review", "rhyme", "rhythm", "rice", "rich", "ride", "riding", "right", "ring", "rise", "rising", "river", "road", "roar", "rock", "rocket", "rocky", "rod", "roll", "roof", "room", "root", "rope", "rose", "rough", "round", "route", "row", "rubbed", "rubber", "rule", "ruler", "run", "running", "rush", "sad", "saddle", "safe", "safety", "said", "sail", "sale", "salmon", "salt", "same", "sand", "sang", "sat", "satellites", "satisfied", "save", "saved", "saw", "say", "scale", "scared", "scene", "school", "science", "scientific", "scientist", "score", "screen", "sea", "search", "season", "seat", "second", "secret", "section", "see", "seed", "seeing", "seems", "seen", "seldom", "select", "selection", "sell", "send", "sense", "sent", "sentence", "separate", "series", "serious", "serve", "service", "sets", "setting", "settle", "settlers", "seven", "several", "shade", "shadow", "shake", "shaking", "shall", "shallow", "shape", "share", "sharp", "she", "sheep", "sheet", "shelf", "shells", "shelter", "shine", "shinning", "ship", "shirt", "shoe", "shoot", "shop", "shore", "short", "shorter", "shot", "should", "shoulder", "shout", "show", "shown", "shut", "sick", "sides", "sight", "sign", "signal", "silence", "silent", "silk", "silly", "silver", "similar", "simple", "simplest", "simply", "since", "sing", "single", "sink", "sister", "sit", "sitting", "situation", "six", "size", "skill", "skin", "sky", "slabs", "slave", "sleep", "slept", "slide", "slight", "slightly", "slip", "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell", "smile", "smoke", "smooth", "snake", "snow", "so", "soap", "social", "society", "soft", "softly", "soil", "solar", "sold", "soldier", "solid", "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometime", "somewhere", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "species", "specific", "speech", "speed", "spell", "spend", "spent", "spider", "spin", "spirit", "spite", "split", "spoken", "sport", "spread", "spring", "square", "stage", "stairs", "stand", "standard", "star", "stared", "start", "state", "statement", "station", "stay", "steady", "steam", "steel", "steep", "stems", "step", "stepped", "stick", "stiff", "still", "stock", "stomach", "stone", "stood", "stop", "stopped", "store", "storm", "story", "stove", "straight", "strange", "stranger", "straw", "stream", "street", "strength", "stretch", "strike", "string", "strip", "strong", "stronger", "struck", "structure", "struggle", "stuck", "student", "studied", "studying", "subject", "substance", "success", "successful", "such", "sudden", "suddenly", "sugar", "suggest", "suit", "sum", "summer", "sun", "sunlight", "supper", "supply", "support", "suppose", "sure", "surface", "surprise", "surrounded", "swam", "sweet", "swept", "swim", "swimming", "swing", "swung", "syllable", "symbol", "system", "table", "tail", "take", "taken", "tales", "talk", "tall", "tank", "tape", "task", "taste", "taught", "tax", "tea", "teach", "teacher", "team", "tears", "teeth", "telephone", "television", "tell", "temperature", "ten", "tent", "term", "terrible", "test", "than", "thank", "that", "thee", "them", "themselves", "then", "theory", "there", "therefore", "these", "they", "thick", "thin", "thing", "think", "third", "thirty", "this", "those", "thou", "though", "thought", "thousand", "thread", "three", "threw", "throat", "through", "throughout", "throw", "thrown", "thumb", "thus", "thy", "tide", "tie", "tight", "tightly", "till", "time", "tin", "tiny", "tip", "tired", "title", "to", "tobacco", "today", "together", "told", "tomorrow", "tone", "tongue", "tonight", "too", "took", "tool", "top", "topic", "torn", "total", "touch", "toward", "tower", "town", "toy", "trace", "track", "trade", "traffic", "trail", "train", "transportation", "trap", "travel", "treated", "tree", "triangle", "tribe", "trick", "tried", "trip", "troops", "tropical", "trouble", "truck", "trunk", "truth", "try", "tube", "tune", "turn", "twelve", "twenty", "twice", "two", "type", "typical", "uncle", "under", "underline", "understanding", "unhappy", "union", "unit", "universe", "unknown", "unless", "until", "unusual", "up", "upon", "upper", "upward", "us", "use", "useful", "using", "usual", "usually", "valley", "valuable", "value", "vapor", "variety", "various", "vast", "vegetable", "verb", "vertical", "very", "vessels", "victory", "view", "village", "visit", "visitor", "voice", "volume", "vote", "vowel", "voyage", "wagon", "wait", "walk", "wall", "want", "war", "warm", "warn", "was", "wash", "waste", "watch", "water", "wave", "way", "we", "weak", "wealth", "wear", "weather", "week", "weigh", "weight", "welcome", "well", "went", "were", "west", "western", "wet", "whale", "what", "whatever", "wheat", "wheel", "when", "whenever", "where", "wherever", "whether", "which", "while", "whispered", "whistle", "white", "who", "whole", "whom", "whose", "why", "wide", "widely", "wife", "wild", "will", "willing", "win", "wind", "window", "wing", "winter", "wire", "wise", "wish", "with", "within", "without", "wolf", "women", "won", "wonder", "wonderful", "wood", "wooden", "wool", "word", "wore", "work", "worker", "world", "worried", "worry", "worse", "worth", "would", "wrapped", "write", "writer", "writing", "written", "wrong", "wrote", "yard", "year", "yellow", "yes", "yesterday", "yet", "you", "young", "younger", "your", "yourself", "youth", "zero", "zoo"],
    random: function () {
        return WordDictionary.words[Math.floor(Math.random() * WordDictionary.words.length)];
    }
};
/*!
    Papa Parse
    v4.3.2
    https://github.com/mholt/PapaParse
*/
!function (a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof module && module.exports ? module.exports = b() : a.Papa = b()
}(this, function () {
    "use strict";
    function a(a, b) {
        b = b || {};
        var c = b.dynamicTyping || !1;
        if (r(c) && (b.dynamicTypingFunction = c,
            c = {}),
            b.dynamicTyping = c,
            b.worker && z.WORKERS_SUPPORTED) {
            var h = k();
            return h.userStep = b.step,
                h.userChunk = b.chunk,
                h.userComplete = b.complete,
                h.userError = b.error,
                b.step = r(b.step),
                b.chunk = r(b.chunk),
                b.complete = r(b.complete),
                b.error = r(b.error),
                delete b.worker,
                void h.postMessage({
                    input: a,
                    config: b,
                    workerId: h.id
                })
        }
        var i = null;
        return "string" == typeof a ? i = b.download ? new d(b) : new f(b) : a.readable === !0 && r(a.read) && r(a.on) ? i = new g(b) : (t.File && a instanceof File || a instanceof Object) && (i = new e(b)),
            i.stream(a)
    }
    function b(a, b) {
        function c() {
            "object" == typeof b && ("string" == typeof b.delimiter && 1 === b.delimiter.length && z.BAD_DELIMITERS.indexOf(b.delimiter) === -1 && (j = b.delimiter),
                ("boolean" == typeof b.quotes || b.quotes instanceof Array) && (h = b.quotes),
                "string" == typeof b.newline && (k = b.newline),
                "string" == typeof b.quoteChar && (l = b.quoteChar),
                "boolean" == typeof b.header && (i = b.header))
        }
        function d(a) {
            if ("object" != typeof a)
                return [];
            var b = [];
            for (var c in a)
                b.push(c);
            return b
        }
        function e(a, b) {
            var c = "";
            "string" == typeof a && (a = JSON.parse(a)),
                "string" == typeof b && (b = JSON.parse(b));
            var d = a instanceof Array && a.length > 0
                , e = !(b[0] instanceof Array);
            if (d && i) {
                for (var g = 0; g < a.length; g++)
                    g > 0 && (c += j),
                        c += f(a[g], g);
                b.length > 0 && (c += k)
            }
            for (var h = 0; h < b.length; h++) {
                for (var l = d ? a.length : b[h].length, m = 0; m < l; m++) {
                    m > 0 && (c += j);
                    var n = d && e ? a[m] : m;
                    c += f(b[h][n], m)
                }
                h < b.length - 1 && (c += k)
            }
            return c
        }
        function f(a, b) {
            if ("undefined" == typeof a || null === a)
                return "";
            a = a.toString().replace(m, l + l);
            var c = "boolean" == typeof h && h || h instanceof Array && h[b] || g(a, z.BAD_DELIMITERS) || a.indexOf(j) > -1 || " " === a.charAt(0) || " " === a.charAt(a.length - 1);
            return c ? l + a + l : a
        }
        function g(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.indexOf(b[c]) > -1)
                    return !0;
            return !1
        }
        var h = !1
            , i = !0
            , j = ","
            , k = "\r\n"
            , l = '"';
        c();
        var m = new RegExp(l, "g");
        if ("string" == typeof a && (a = JSON.parse(a)),
            a instanceof Array) {
            if (!a.length || a[0] instanceof Array)
                return e(null, a);
            if ("object" == typeof a[0])
                return e(d(a[0]), a)
        } else if ("object" == typeof a)
            return "string" == typeof a.data && (a.data = JSON.parse(a.data)),
                a.data instanceof Array && (a.fields || (a.fields = a.meta && a.meta.fields),
                    a.fields || (a.fields = a.data[0] instanceof Array ? a.fields : d(a.data[0])),
                    a.data[0] instanceof Array || "object" == typeof a.data[0] || (a.data = [a.data])),
                e(a.fields || [], a.data || []);
        throw "exception: Unable to serialize unrecognized input"
    }
    function c(a) {
        function b(a) {
            var b = p(a);
            b.chunkSize = parseInt(b.chunkSize),
                a.step || a.chunk || (b.chunkSize = null),
                this._handle = new h(b),
                this._handle.streamer = this,
                this._config = b
        }
        this._handle = null,
            this._paused = !1,
            this._finished = !1,
            this._input = null,
            this._baseIndex = 0,
            this._partialLine = "",
            this._rowCount = 0,
            this._start = 0,
            this._nextChunk = null,
            this.isFirstChunk = !0,
            this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            },
            b.call(this, a),
            this.parseChunk = function (a) {
                if (this.isFirstChunk && r(this._config.beforeFirstChunk)) {
                    var b = this._config.beforeFirstChunk(a);
                    void 0 !== b && (a = b)
                }
                this.isFirstChunk = !1;
                var c = this._partialLine + a;
                this._partialLine = "";
                var d = this._handle.parse(c, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var e = d.meta.cursor;
                    this._finished || (this._partialLine = c.substring(e - this._baseIndex),
                        this._baseIndex = e),
                        d && d.data && (this._rowCount += d.data.length);
                    var f = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (v)
                        t.postMessage({
                            results: d,
                            workerId: z.WORKER_ID,
                            finished: f
                        });
                    else if (r(this._config.chunk)) {
                        if (this._config.chunk(d, this._handle),
                            this._paused)
                            return;
                        d = void 0,
                            this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d.data),
                        this._completeResults.errors = this._completeResults.errors.concat(d.errors),
                        this._completeResults.meta = d.meta),
                        !f || !r(this._config.complete) || d && d.meta.aborted || this._config.complete(this._completeResults, this._input),
                        f || d && d.meta.paused || this._nextChunk(),
                        d
                }
            }
            ,
            this._sendError = function (a) {
                r(this._config.error) ? this._config.error(a) : v && this._config.error && t.postMessage({
                    workerId: z.WORKER_ID,
                    error: a,
                    finished: !1
                })
            }
    }
    function d(a) {
        function b(a) {
            var b = a.getResponseHeader("Content-Range");
            return null === b ? -1 : parseInt(b.substr(b.lastIndexOf("/") + 1))
        }
        a = a || {},
            a.chunkSize || (a.chunkSize = z.RemoteChunkSize),
            c.call(this, a);
        var d;
        u ? this._nextChunk = function () {
            this._readChunk(),
                this._chunkLoaded()
        }
            : this._nextChunk = function () {
                this._readChunk()
            }
            ,
            this.stream = function (a) {
                this._input = a,
                    this._nextChunk()
            }
            ,
            this._readChunk = function () {
                if (this._finished)
                    return void this._chunkLoaded();
                if (d = new XMLHttpRequest,
                    this._config.withCredentials && (d.withCredentials = this._config.withCredentials),
                    u || (d.onload = q(this._chunkLoaded, this),
                        d.onerror = q(this._chunkError, this)),
                    d.open("GET", this._input, !u),
                    this._config.downloadRequestHeaders) {
                    var a = this._config.downloadRequestHeaders;
                    for (var b in a)
                        d.setRequestHeader(b, a[b])
                }
                if (this._config.chunkSize) {
                    var c = this._start + this._config.chunkSize - 1;
                    d.setRequestHeader("Range", "bytes=" + this._start + "-" + c),
                        d.setRequestHeader("If-None-Match", "webkit-no-cache")
                }
                try {
                    d.send()
                } catch (a) {
                    this._chunkError(a.message)
                }
                u && 0 === d.status ? this._chunkError() : this._start += this._config.chunkSize
            }
            ,
            this._chunkLoaded = function () {
                if (4 == d.readyState) {
                    if (d.status < 200 || d.status >= 400)
                        return void this._chunkError();
                    this._finished = !this._config.chunkSize || this._start > b(d),
                        this.parseChunk(d.responseText)
                }
            }
            ,
            this._chunkError = function (a) {
                var b = d.statusText || a;
                this._sendError(b)
            }
    }
    function e(a) {
        a = a || {},
            a.chunkSize || (a.chunkSize = z.LocalChunkSize),
            c.call(this, a);
        var b, d, e = "undefined" != typeof FileReader;
        this.stream = function (a) {
            this._input = a,
                d = a.slice || a.webkitSlice || a.mozSlice,
                e ? (b = new FileReader,
                    b.onload = q(this._chunkLoaded, this),
                    b.onerror = q(this._chunkError, this)) : b = new FileReaderSync,
                this._nextChunk()
        }
            ,
            this._nextChunk = function () {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }
            ,
            this._readChunk = function () {
                var a = this._input;
                if (this._config.chunkSize) {
                    var c = Math.min(this._start + this._config.chunkSize, this._input.size);
                    a = d.call(a, this._start, c)
                }
                var f = b.readAsText(a, this._config.encoding);
                e || this._chunkLoaded({
                    target: {
                        result: f
                    }
                })
            }
            ,
            this._chunkLoaded = function (a) {
                this._start += this._config.chunkSize,
                    this._finished = !this._config.chunkSize || this._start >= this._input.size,
                    this.parseChunk(a.target.result)
            }
            ,
            this._chunkError = function () {
                this._sendError(b.error)
            }
    }
    function f(a) {
        a = a || {},
            c.call(this, a);
        var b, d;
        this.stream = function (a) {
            return b = a,
                d = a,
                this._nextChunk()
        }
            ,
            this._nextChunk = function () {
                if (!this._finished) {
                    var a = this._config.chunkSize
                        , b = a ? d.substr(0, a) : d;
                    return d = a ? d.substr(a) : "",
                        this._finished = !d,
                        this.parseChunk(b)
                }
            }
    }
    function g(a) {
        a = a || {},
            c.call(this, a);
        var b = []
            , d = !0;
        this.stream = function (a) {
            this._input = a,
                this._input.on("data", this._streamData),
                this._input.on("end", this._streamEnd),
                this._input.on("error", this._streamError)
        }
            ,
            this._nextChunk = function () {
                b.length ? this.parseChunk(b.shift()) : d = !0
            }
            ,
            this._streamData = q(function (a) {
                try {
                    b.push("string" == typeof a ? a : a.toString(this._config.encoding)),
                        d && (d = !1,
                            this.parseChunk(b.shift()))
                } catch (a) {
                    this._streamError(a)
                }
            }, this),
            this._streamError = q(function (a) {
                this._streamCleanUp(),
                    this._sendError(a.message)
            }, this),
            this._streamEnd = q(function () {
                this._streamCleanUp(),
                    this._finished = !0,
                    this._streamData("")
            }, this),
            this._streamCleanUp = q(function () {
                this._input.removeListener("data", this._streamData),
                    this._input.removeListener("end", this._streamEnd),
                    this._input.removeListener("error", this._streamError)
            }, this)
    }
    function h(a) {
        function b() {
            if (x && o && (l("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + z.DefaultDelimiter + "'"),
                o = !1),
                a.skipEmptyLines)
                for (var b = 0; b < x.data.length; b++)
                    1 === x.data[b].length && "" === x.data[b][0] && x.data.splice(b--, 1);
            return c() && d(),
                g()
        }
        function c() {
            return a.header && 0 === w.length
        }
        function d() {
            if (x) {
                for (var a = 0; c() && a < x.data.length; a++)
                    for (var b = 0; b < x.data[a].length; b++)
                        w.push(x.data[a][b]);
                x.data.splice(0, 1)
            }
        }
        function e(b) {
            return a.dynamicTypingFunction && void 0 === a.dynamicTyping[b] && (a.dynamicTyping[b] = a.dynamicTypingFunction(b)),
                (a.dynamicTyping[b] || a.dynamicTyping) === !0
        }
        function f(a, b) {
            return e(a) ? "true" === b || "TRUE" === b || "false" !== b && "FALSE" !== b && k(b) : b
        }
        function g() {
            if (!x || !a.header && !a.dynamicTyping)
                return x;
            for (var b = 0; b < x.data.length; b++) {
                for (var c = a.header ? {} : [], d = 0; d < x.data[b].length; d++) {
                    var e = d
                        , g = x.data[b][d];
                    a.header && (e = d >= w.length ? "__parsed_extra" : w[d]),
                        g = f(e, g),
                        "__parsed_extra" === e ? (c[e] = c[e] || [],
                            c[e].push(g)) : c[e] = g
                }
                x.data[b] = c,
                    a.header && (d > w.length ? l("FieldMismatch", "TooManyFields", "Too many fields: expected " + w.length + " fields but parsed " + d, b) : d < w.length && l("FieldMismatch", "TooFewFields", "Too few fields: expected " + w.length + " fields but parsed " + d, b))
            }
            return a.header && x.meta && (x.meta.fields = w),
                x
        }
        function h(b, c) {
            for (var d, e, f, g = [",", "\t", "|", ";", z.RECORD_SEP, z.UNIT_SEP], h = 0; h < g.length; h++) {
                var j = g[h]
                    , k = 0
                    , l = 0;
                f = void 0;
                for (var m = new i({
                    delimiter: j,
                    newline: c,
                    preview: 10
                }).parse(b), n = 0; n < m.data.length; n++) {
                    var o = m.data[n].length;
                    l += o,
                        "undefined" != typeof f ? o > 1 && (k += Math.abs(o - f),
                            f = o) : f = o
                }
                m.data.length > 0 && (l /= m.data.length),
                    ("undefined" == typeof e || k < e) && l > 1.99 && (e = k,
                        d = j)
            }
            return a.delimiter = d,
            {
                successful: !!d,
                bestDelimiter: d
            }
        }
        function j(a) {
            a = a.substr(0, 1048576);
            var b = a.split("\r")
                , c = a.split("\n")
                , d = c.length > 1 && c[0].length < b[0].length;
            if (1 === b.length || d)
                return "\n";
            for (var e = 0, f = 0; f < b.length; f++)
                "\n" === b[f][0] && e++;
            return e >= b.length / 2 ? "\r\n" : "\r"
        }
        function k(a) {
            var b = q.test(a);
            return b ? parseFloat(a) : a
        }
        function l(a, b, c, d) {
            x.errors.push({
                type: a,
                code: b,
                message: c,
                row: d
            })
        }
        var m, n, o, q = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, s = this, t = 0, u = !1, v = !1, w = [], x = {
            data: [],
            errors: [],
            meta: {}
        };
        if (r(a.step)) {
            var y = a.step;
            a.step = function (d) {
                if (x = d,
                    c())
                    b();
                else {
                    if (b(),
                        0 === x.data.length)
                        return;
                    t += d.data.length,
                        a.preview && t > a.preview ? n.abort() : y(x, s)
                }
            }
        }
        this.parse = function (c, d, e) {
            if (a.newline || (a.newline = j(c)),
                o = !1,
                a.delimiter)
                r(a.delimiter) && (a.delimiter = a.delimiter(c),
                    x.meta.delimiter = a.delimiter);
            else {
                var f = h(c, a.newline);
                f.successful ? a.delimiter = f.bestDelimiter : (o = !0,
                    a.delimiter = z.DefaultDelimiter),
                    x.meta.delimiter = a.delimiter
            }
            var g = p(a);
            return a.preview && a.header && g.preview++,
                m = c,
                n = new i(g),
                x = n.parse(m, d, e),
                b(),
                u ? {
                    meta: {
                        paused: !0
                    }
                } : x || {
                    meta: {
                        paused: !1
                    }
                }
        }
            ,
            this.paused = function () {
                return u
            }
            ,
            this.pause = function () {
                u = !0,
                    n.abort(),
                    m = m.substr(n.getCharIndex())
            }
            ,
            this.resume = function () {
                u = !1,
                    s.streamer.parseChunk(m)
            }
            ,
            this.aborted = function () {
                return v
            }
            ,
            this.abort = function () {
                v = !0,
                    n.abort(),
                    x.meta.aborted = !0,
                    r(a.complete) && a.complete(x),
                    m = ""
            }
    }
    function i(a) {
        a = a || {};
        var b = a.delimiter
            , c = a.newline
            , d = a.comments
            , e = a.step
            , f = a.preview
            , g = a.fastMode
            , h = a.quoteChar || '"';
        if (("string" != typeof b || z.BAD_DELIMITERS.indexOf(b) > -1) && (b = ","),
            d === b)
            throw "Comment character same as delimiter";
        d === !0 ? d = "#" : ("string" != typeof d || z.BAD_DELIMITERS.indexOf(d) > -1) && (d = !1),
            "\n" != c && "\r" != c && "\r\n" != c && (c = "\n");
        var i = 0
            , j = !1;
        this.parse = function (a, k, l) {
            function m(a) {
                x.push(a),
                    A = i
            }
            function n(b) {
                return l ? p() : ("undefined" == typeof b && (b = a.substr(i)),
                    z.push(b),
                    i = s,
                    m(z),
                    w && q(),
                    p())
            }
            function o(b) {
                i = b,
                    m(z),
                    z = [],
                    E = a.indexOf(c, i)
            }
            function p(a) {
                return {
                    data: x,
                    errors: y,
                    meta: {
                        delimiter: b,
                        linebreak: c,
                        aborted: j,
                        truncated: !!a,
                        cursor: A + (k || 0)
                    }
                }
            }
            function q() {
                e(p()),
                    x = [],
                    y = []
            }
            if ("string" != typeof a)
                throw "Input must be a string";
            var s = a.length
                , t = b.length
                , u = c.length
                , v = d.length
                , w = r(e);
            i = 0;
            var x = []
                , y = []
                , z = []
                , A = 0;
            if (!a)
                return p();
            if (g || g !== !1 && a.indexOf(h) === -1) {
                for (var B = a.split(c), C = 0; C < B.length; C++) {
                    var z = B[C];
                    if (i += z.length,
                        C !== B.length - 1)
                        i += c.length;
                    else if (l)
                        return p();
                    if (!d || z.substr(0, v) !== d) {
                        if (w) {
                            if (x = [],
                                m(z.split(b)),
                                q(),
                                j)
                                return p()
                        } else
                            m(z.split(b));
                        if (f && C >= f)
                            return x = x.slice(0, f),
                                p(!0)
                    }
                }
                return p()
            }
            for (var D = a.indexOf(b, i), E = a.indexOf(c, i), F = new RegExp(h + h, "g"); ;)
                if (a[i] !== h)
                    if (d && 0 === z.length && a.substr(i, v) === d) {
                        if (E === -1)
                            return p();
                        i = E + u,
                            E = a.indexOf(c, i),
                            D = a.indexOf(b, i)
                    } else if (D !== -1 && (D < E || E === -1))
                        z.push(a.substring(i, D)),
                            i = D + t,
                            D = a.indexOf(b, i);
                    else {
                        if (E === -1)
                            break;
                        if (z.push(a.substring(i, E)),
                            o(E + u),
                            w && (q(),
                                j))
                            return p();
                        if (f && x.length >= f)
                            return p(!0)
                    }
                else {
                    var G = i;
                    for (i++; ;) {
                        var G = a.indexOf(h, G + 1);
                        if (G === -1)
                            return l || y.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: x.length,
                                index: i
                            }),
                                n();
                        if (G === s - 1) {
                            var H = a.substring(i, G).replace(F, h);
                            return n(H)
                        }
                        if (a[G + 1] !== h) {
                            if (a[G + 1] === b) {
                                z.push(a.substring(i, G).replace(F, h)),
                                    i = G + 1 + t,
                                    D = a.indexOf(b, i),
                                    E = a.indexOf(c, i);
                                break
                            }
                            if (a.substr(G + 1, u) === c) {
                                if (z.push(a.substring(i, G).replace(F, h)),
                                    o(G + 1 + u),
                                    D = a.indexOf(b, i),
                                    w && (q(),
                                        j))
                                    return p();
                                if (f && x.length >= f)
                                    return p(!0);
                                break
                            }
                        } else
                            G++
                    }
                }
            return n()
        }
            ,
            this.abort = function () {
                j = !0
            }
            ,
            this.getCharIndex = function () {
                return i
            }
    }
    function j() {
        var a = document.getElementsByTagName("script");
        return a.length ? a[a.length - 1].src : ""
    }
    function k() {
        if (!z.WORKERS_SUPPORTED)
            return !1;
        if (!w && null === z.SCRIPT_PATH)
            throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
        var a = z.SCRIPT_PATH || s;
        a += (a.indexOf("?") !== -1 ? "&" : "?") + "papaworker";
        var b = new t.Worker(a);
        return b.onmessage = l,
            b.id = y++,
            x[b.id] = b,
            b
    }
    function l(a) {
        var b = a.data
            , c = x[b.workerId]
            , d = !1;
        if (b.error)
            c.userError(b.error, b.file);
        else if (b.results && b.results.data) {
            var e = function () {
                d = !0,
                    m(b.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    })
            }
                , f = {
                    abort: e,
                    pause: n,
                    resume: n
                };
            if (r(c.userStep)) {
                for (var g = 0; g < b.results.data.length && (c.userStep({
                    data: [b.results.data[g]],
                    errors: b.results.errors,
                    meta: b.results.meta
                }, f),
                    !d); g++)
                    ;
                delete b.results
            } else
                r(c.userChunk) && (c.userChunk(b.results, f, b.file),
                    delete b.results)
        }
        b.finished && !d && m(b.workerId, b.results)
    }
    function m(a, b) {
        var c = x[a];
        r(c.userComplete) && c.userComplete(b),
            c.terminate(),
            delete x[a]
    }
    function n() {
        throw "Not implemented."
    }
    function o(a) {
        var b = a.data;
        if ("undefined" == typeof z.WORKER_ID && b && (z.WORKER_ID = b.workerId),
            "string" == typeof b.input)
            t.postMessage({
                workerId: z.WORKER_ID,
                results: z.parse(b.input, b.config),
                finished: !0
            });
        else if (t.File && b.input instanceof File || b.input instanceof Object) {
            var c = z.parse(b.input, b.config);
            c && t.postMessage({
                workerId: z.WORKER_ID,
                results: c,
                finished: !0
            })
        }
    }
    function p(a) {
        if ("object" != typeof a)
            return a;
        var b = a instanceof Array ? [] : {};
        for (var c in a)
            b[c] = p(a[c]);
        return b
    }
    function q(a, b) {
        return function () {
            a.apply(b, arguments)
        }
    }
    function r(a) {
        return "function" == typeof a
    }
    var s, t = function () {
        return "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof t ? t : {}
    }(), u = !t.document && !!t.postMessage, v = u && /(\?|&)papaworker(=|&|$)/.test(t.location.search), w = !1, x = {}, y = 0, z = {};
    if (z.parse = a,
        z.unparse = b,
        z.RECORD_SEP = String.fromCharCode(30),
        z.UNIT_SEP = String.fromCharCode(31),
        z.BYTE_ORDER_MARK = "\ufeff",
        z.BAD_DELIMITERS = ["\r", "\n", '"', z.BYTE_ORDER_MARK],
        z.WORKERS_SUPPORTED = !u && !!t.Worker,
        z.SCRIPT_PATH = null,
        z.LocalChunkSize = 10485760,
        z.RemoteChunkSize = 5242880,
        z.DefaultDelimiter = ",",
        z.Parser = i,
        z.ParserHandle = h,
        z.NetworkStreamer = d,
        z.FileStreamer = e,
        z.StringStreamer = f,
        z.ReadableStreamStreamer = g,
        t.jQuery) {
        var A = t.jQuery;
        A.fn.parse = function (a) {
            function b() {
                if (0 === f.length)
                    return void (r(a.complete) && a.complete());
                var b = f[0];
                if (r(a.before)) {
                    var e = a.before(b.file, b.inputElem);
                    if ("object" == typeof e) {
                        if ("abort" === e.action)
                            return void c("AbortError", b.file, b.inputElem, e.reason);
                        if ("skip" === e.action)
                            return void d();
                        "object" == typeof e.config && (b.instanceConfig = A.extend(b.instanceConfig, e.config))
                    } else if ("skip" === e)
                        return void d()
                }
                var g = b.instanceConfig.complete;
                b.instanceConfig.complete = function (a) {
                    r(g) && g(a, b.file, b.inputElem),
                        d()
                }
                    ,
                    z.parse(b.file, b.instanceConfig)
            }
            function c(b, c, d, e) {
                r(a.error) && a.error({
                    name: b
                }, c, d, e)
            }
            function d() {
                f.splice(0, 1),
                    b()
            }
            var e = a.config || {}
                , f = [];
            return this.each(function (a) {
                var b = "INPUT" === A(this).prop("tagName").toUpperCase() && "file" === A(this).attr("type").toLowerCase() && t.FileReader;
                if (!b || !this.files || 0 === this.files.length)
                    return !0;
                for (var c = 0; c < this.files.length; c++)
                    f.push({
                        file: this.files[c],
                        inputElem: this,
                        instanceConfig: A.extend({}, e)
                    })
            }),
                b(),
                this
        }
    }
    return v ? t.onmessage = o : z.WORKERS_SUPPORTED && (s = j(),
        document.body ? document.addEventListener("DOMContentLoaded", function () {
            w = !0
        }, !0) : w = !0),
        d.prototype = Object.create(c.prototype),
        d.prototype.constructor = d,
        e.prototype = Object.create(c.prototype),
        e.prototype.constructor = e,
        f.prototype = Object.create(f.prototype),
        f.prototype.constructor = f,
        g.prototype = Object.create(c.prototype),
        g.prototype.constructor = g,
        z
});
;