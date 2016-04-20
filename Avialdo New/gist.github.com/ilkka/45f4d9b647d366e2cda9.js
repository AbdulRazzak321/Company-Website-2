document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-51ae8299bd14b6c42fb20b0ce07f643175347abaca051f9c55e114bfc98b10b1.css">')
document.write('<div id=\"gist15364800\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-dynamically_add_android_tests-groovy\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-groovy\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC1\" class=\"blob-code blob-code-inner js-file-line\">task addTest {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">def<\/span> src <span class=\"pl-k\">=<\/span> [<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>src/test/java<span class=\"pl-pds\">&#39;<\/span><\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC3\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">def<\/span> file <span class=\"pl-k\">=<\/span> file(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>app.iml<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC4\" class=\"blob-code blob-code-inner js-file-line\">  doLast {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">try<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC6\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">def<\/span> parsedXml <span class=\"pl-k\">=<\/span> (<span class=\"pl-k\">new<\/span> <span class=\"pl-k\">XmlParser<\/span>())<span class=\"pl-k\">.<\/span>parse(file)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC7\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">def<\/span> node <span class=\"pl-k\">=<\/span> parsedXml<span class=\"pl-k\">.<\/span>component[<span class=\"pl-c1\">1<\/span>]<span class=\"pl-k\">.<\/span>content[<span class=\"pl-c1\">0<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC8\" class=\"blob-code blob-code-inner js-file-line\">      src<span class=\"pl-k\">.<\/span>each {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC9\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">def<\/span> path <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>file://$MODULE_DIR$/<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">+<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-s1\"><span class=\"pl-pse\">${<\/span>it<span class=\"pl-pse\">}<\/span><\/span><span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">def<\/span> set <span class=\"pl-k\">=<\/span> node<span class=\"pl-k\">.<\/span>find {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC11\" class=\"blob-code blob-code-inner js-file-line\">          it<span class=\"pl-k\">.<\/span>@url <span class=\"pl-k\">==<\/span> path<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC12\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC13\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">if<\/span> (set <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">null<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC14\" class=\"blob-code blob-code-inner js-file-line\">          <span class=\"pl-k\">new<\/span> <span class=\"pl-k\">Node<\/span>(node, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>sourceFolder<span class=\"pl-pds\">&#39;<\/span><\/span>, [<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC15\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>url<span class=\"pl-pds\">&#39;<\/span><\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>file://$MODULE_DIR$/<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">+<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-s1\"><span class=\"pl-pse\">${<\/span>it<span class=\"pl-pse\">}<\/span><\/span><span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC16\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>isTestSource<span class=\"pl-pds\">&#39;<\/span><\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>true<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC17\" class=\"blob-code blob-code-inner js-file-line\">          ])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC18\" class=\"blob-code blob-code-inner js-file-line\">          <span class=\"pl-k\">def<\/span> writer <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-k\">StringWriter<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC19\" class=\"blob-code blob-code-inner js-file-line\">          <span class=\"pl-k\">new<\/span> <span class=\"pl-k\">XmlNodePrinter<\/span>(<span class=\"pl-k\">new<\/span> <span class=\"pl-k\">PrintWriter<\/span>(writer))<span class=\"pl-k\">.<\/span><span class=\"pl-c1\">print<\/span>(parsedXml)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC20\" class=\"blob-code blob-code-inner js-file-line\">          file<span class=\"pl-k\">.<\/span>text <span class=\"pl-k\">=<\/span> writer<span class=\"pl-k\">.<\/span>toString()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC21\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC22\" class=\"blob-code blob-code-inner js-file-line\">      }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC23\" class=\"blob-code blob-code-inner js-file-line\">    } <span class=\"pl-k\">catch<\/span> (<span class=\"pl-k\">FileNotFoundException<\/span> e) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC24\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\">// nop, iml not found<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC25\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC26\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC27\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC28\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">// always do the addtest on prebuild<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-dynamically_add_android_tests-groovy-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-dynamically_add_android_tests-groovy-LC29\" class=\"blob-code blob-code-inner js-file-line\">gradle<span class=\"pl-k\">.<\/span>projectsEvaluated { preBuild<span class=\"pl-k\">.<\/span>dependsOn(addTest) }<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/ilkka/45f4d9b647d366e2cda9/raw/d310bdda8998edea779143b7cde970f015c443d5/dynamically_add_android_tests.groovy\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/ilkka/45f4d9b647d366e2cda9#file-dynamically_add_android_tests-groovy\">dynamically_add_android_tests.groovy<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')