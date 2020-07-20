// Initialize DOM Objects
const affixInput = document.querySelector('.affix-input');
const affixButton = document.querySelector('.affix-button');
const sortInputs = document.getElementsByName('sort-type');
const sortAlpha = document.getElementById('sort-alpha');
const sortLength = document.getElementById('sort-length');
const sortDepth = document.getElementById('sort-depth');

// Initialize Alphabetical Arrays
var a_suf = new Array();
var b_suf = new Array();
var c_suf = new Array();
var d_suf = new Array();
var e_suf = new Array();
var f_suf = new Array();
var g_suf = new Array();
var h_suf = new Array();
var i_suf = new Array();
var j_suf = new Array();
var k_suf = new Array();
var l_suf = new Array();
var m_suf = new Array();
var n_suf = new Array();
var o_suf = new Array();
var p_suf = new Array();
var r_suf = new Array();
var s_suf = new Array();
var t_suf = new Array();
var u_suf = new Array();
var v_suf = new Array();
var w_suf = new Array();
var x_suf = new Array();
var y_suf = new Array();
var z_suf = new Array();

// Store Alphabetical Arrays
const all_sufs = [a_suf, b_suf, c_suf, d_suf, e_suf, f_suf, g_suf, h_suf, i_suf, j_suf, k_suf, l_suf, m_suf, n_suf, o_suf, p_suf, r_suf, s_suf, t_suf, u_suf, v_suf, w_suf, x_suf, y_suf, z_suf];

// Event Listeners
affixButton.addEventListener('click', displaySuffix);

// NOTE: onClick doesn't work on chrome extensions, so this was the alternative
sortAlpha.addEventListener('click', reSort);
sortLength.addEventListener('click', reSort);
sortDepth.addEventListener('click', reSort);

// Event for when a word is inputted / "Define" button clicked
function displaySuffix(event) {
    event.preventDefault();
    if (document.getElementsByClassName('out-affix').length >= 1) {
        const removable_div = document.getElementsByClassName('out-affix');
        while (removable_div.length > 0) {
            removable_div[0].parentNode.removeChild(removable_div[0]);
        }
    }
    userWord = affixInput.value;
    findSuffix(userWord, all_sufs);
    reSort();
}

// Gets which "sort" option was chosen and reorganizes the suffixes
function reSort() {
    sortVal = checkSort();
    sortBy(sortVal);
}

// Reogranizes the suffixes
function sortBy(val) {
    var outputColl = document.getElementsByClassName('out-affix');
    // Might make this a case?
    if (val == 0) {
        if (outputColl.length >= 2) {
            var reOrg = [];
            for (var k = 0; k < outputColl.length; k++) {
                reOrg.push(outputColl[k].firstChild);
            }
            reOrg.sort(function(a, b){return b.innerText.length - a.innerText.length});
            for (q = 0; q < reOrg.length; q++) { document.getElementById('output-space').appendChild(reOrg[q].parentNode); }
        } 
    } else if (val == 1) {
        var alphaOrg = [];
        for (w = 0; w < outputColl.length; w++) { alphaOrg.push(outputColl[w].firstChild); }
        alphaOrg.sort(function(a, b) {
            return a.innerText == b.innerText ? 0 : (a.innerText > b.innerText ? 1 : -1); });
          for (var t = 0; t < outputColl.length; t++) { document.getElementById('output-space').appendChild(alphaOrg[t].parentNode); }
    } else if (val == 2) {
        if (outputColl.length >= 2) {
            var deOrg = [];
            for (var j = 0; j < outputColl.length; j++) { deOrg.push(outputColl[j].lastChild); }
            deOrg.sort(function(a, b){return b.innerText.length - a.innerText.length});
            for (h = 0; h < deOrg.length; h++) { document.getElementById('output-space').appendChild(deOrg[h].parentNode); }
        } 
    }
}

// Finds which "sort" option is chosen
function checkSort() {
    for (var i = 0; i < sortInputs.length; i++) {
        if (sortInputs[i].checked) { return sortInputs[i].value; }
    }
}

// Loops through all_sufs and then the array at the particular index all_sufs is at (all_sufs[i])
function findSuffix(word, array) {
    for (var i = 0; i < array.length; i++) {
        var matches = 0;
        set_suf(i);
        for (var v = 0; v < array[i].length; v++) {
            const suf_name = (array[i])[v].slice(0, (array[i])[v].search("~"));
            if (word.toLowerCase().endsWith(suf_name)) {
                matches++;
                const affixDiv = document.createElement('div');
                affixDiv.classList.add('opacity-affix');
                document.getElementById('output-space').appendChild(affixDiv);
                affixDiv.classList.add('out-affix');

                const suf_def = (array[i])[v].slice((array[i])[v].search("~") + 1, (array[i])[v].length);

                const affixList = document.createElement('p');
                const affixHead = document.createElement('p');
                affixHead.innerText = "-" + suf_name;
                affixList.innerText = suf_def;

                affixHead.classList.add('out-header');
                affixList.classList.add('out-def');
                affixDiv.appendChild(affixHead);
                affixDiv.appendChild(affixList);

                if (suf_name.length <= 2) { matches--; }
                else if ((matches >= 1) && ([0, 4, 8, 14, 19].includes(i))) { matches--; }
            }
        }
        clear_suf(array[i]);
        if (matches >= 2) { break; } // Just in case...
    }
}

// Clears array at particular index
function clear_suf(array) {
    array.length = 0;
}

/* DICTIONARY OF SUFFIX DEFINITIONS */
// "~" was used to seperate suffix "name" from suffix "definition
// Inserts definition based on which index all_sufs is at
function set_suf(num) {
    switch(num) {
    case 0:
        a_suf.push("a~1. From the homographic case endings of the nominative, accusative, and vocative forms of numerous Latin neuter second declension nouns.");
        a_suf.push("athon~1. Added to the end of words referring to an activity or event, especially one that has been organized to raise money for charity, to show that it continues for a long time.");
        a_suf.push("ability~1. Inclination or suitability for a specified function or condition.");
        a_suf.push("able~1. fit to be done.\n\n2. Relevant to or suitable to, in accordance with.\n\n3. Giving, or inclined to.\n\n4. Subject to.\n\n5. Due to be.");
        a_suf.push("ably~1. Used to form adverbs corresponding to adjectives that end in -able.");
        a_suf.push("ac~1. One affected with.\n\n2. Of, belonging to.");
        a_suf.push("aceous~1. Of, relating to, resembling or containing the thing suffixed.\n\n2. Belonging to a taxonomic family or other group.");
        a_suf.push("acious~1. Used to form adjectives from nouns.");
        a_suf.push("acity~1. Having the quality of.\n\n2. Abounding in.");
        a_suf.push("ad~1. A unit or set (especially of a specified number).\n\n2. (medicine, anatomy) toward");
        a_suf.push("ade~1. Used to form nouns denoting action, or a person performing said action.\n\n2. Indicating a drink made from a given fruit.");
        a_suf.push("adelic~1. (slang) A suffix used to create adjectives imparting a specific form of coolness, verve, or trippiness.");
        a_suf.push("adic~1. (mathematics compushing) Having a specified adicity.\n\n2. Combined with prefixes derived (usually) from Greek names for numbers to make adjectives meaning \"having a certain number of arguments\"");
        a_suf.push("aemia~1. (British spelling, medicine) Blood; state or condition of the blood.");
        a_suf.push("afil~1. (chemistry) Used to form names of generic phosphodiesterase inhibitor drugs.");
        a_suf.push("age~1. Forming nouns with the sense of collection or appurtenance.\n\n2. Forming nouns indicating a process, action, or a result.\n\n3. Forming nouns of a state or relationship.\n\n4. Forming nouns indicating a place.\n\n5. Forming nouns indicating a charge, toll, or fee.\n\n6. Forming nouns indicating a rate.");
        a_suf.push("agogue~1. (medicine) Something that stimulates a flow\n\n2. Someone who leads.");
        a_suf.push("agogy~1. Leading.");
        a_suf.push("aholic~1. Denotes addiction to the substance or activity of the stem word.");
        a_suf.push("aire~1. One whose wealth exceeds a specific number of units in the local currency.");
        a_suf.push("al~1. Of or pertaining to.\n\n2. Forming nouns, especially of verbal action.");
        a_suf.push("algia~1. Pain, suffering.");
        a_suf.push("algy~1. A variant of the suffix -algia.");
        a_suf.push("all~1. Obsolete spelling of -al.\n\n2. Relating to the whole of something.");
        a_suf.push("ally~1. Alternative form of -ly (adverbial suffix), used with adjectives in -ic.");
        a_suf.push("ambulist~1. Walker, one who walks.");
        a_suf.push("amic~1. (chemistry) Of, relating to, or derived from an amine, amide or amic acid.");
        a_suf.push("amidine~1. (organic chemistry) Denotes a chemical compound containing an amidine functional group.");
        a_suf.push("amine~1. (organic chemistry) An amine.");
        a_suf.push("amundo~1. (slang) An intensifier.");
        a_suf.push("an~1. Of or pertaining to.\n\n2. Appended to nouns to form an agent noun. (When males with a profession are distinguished from females, males are -an, females -(i)enne.)");
        a_suf.push("ana~1. A collection of things that relate to a specific place, person, etc.");
        a_suf.push("ance~1. Added to an adjective or verb to form a noun indicating a state or condition, such as result or capacity, associated with the verb.\n\n2. Added to a verb to form a noun indicating a process or action.");
        a_suf.push("ancy~1. Added to verbs and adjectives to form nouns conveying a condition or quality associated with the verb.");
        a_suf.push("and~1. (alt forms: -ant, -nd, -on)  Used to form the present participle of verbs, equivalent to -ing.\n\n2. A suffix forming nouns denoting patients or recipients of actions, such as compiland.");
        a_suf.push("ander~1. (botany, forming nouns) stamen.");
        a_suf.push("andrian~1. (botany, Forming adjectives) stamen(s).");
        a_suf.push("androus~1. (botany) Having a specified number of stamens\n\n2. Having the specified number of husbands.");
        a_suf.push("andry~1. Male mate(s), husband(s).\n\n2. Man, men; male(s).\n\n3. Male reproductive organ(s); (especially in botany): stamen(s).");
        a_suf.push("ane~1. Variant of -an, usually with differentiation (germane, humane, urbane), but sometimes alone (mundane).\n\n2. (organic chemistry) A saturated hydrocarbon; an alkane.\n\n3. (chemistry) A simple binary compound of hydrogen and a nonmetal or metalloid.");
        a_suf.push("aneous~1. (a variant of -ous) Used to form adjectives from nouns, to denote possession or presence of a quality in any degree, commonly in abundance.\n\n2. (chemistry) Used in chemical nomenclature to name chemical compounds in which a specified chemical element has a lower oxidation number than in the equivalent compound whose name ends in the suffix -ic.");
        a_suf.push("angle~1. (geometry, of a two-dimensional shape) having the specified number of internal angles");
        a_suf.push("angular~1. Angular, having (specified kind or number of) angles");
        a_suf.push("anine~1. (variant of -ine) (chiefly non-productive) Of or pertaining to.\n\n2. Used to form demonyms.\n\n3. (chemistry) Used to form names of chemical substances, especially basic (alkaline) substances, alkaloidal substances, or halogen elements.\n\n4. (non-productive) Used to form feminine nouns.\n\n5. (non-productive) Used to form female given names or names of titles.\n\n6. Commercial materials ");
        a_suf.push("ant~1. (now sciences, chiefly medicine) The agent noun derived from verb.\n\n2. An adjective corresponding to a noun in -ance.\n\n3. (uncommon) An adjective derived from a verb.\n\n4. Alternative form of -and.");
        a_suf.push("anth~1. (biology) flower.");
        a_suf.push("anthropy~1. humanity; mankind.");
        a_suf.push("ar~1. Of, near, or pertaining to.");
        a_suf.push("arch~1. Leading, leader.");
        a_suf.push("archy~1. Form of government or rule.");
        a_suf.push("ard~1. Someone who is in a specified condition (“pejorative agent suffix”).");
        a_suf.push("arian~1. A believer in something.\n\n2. An advocate of something.\n\n3. (uncommon) A native or inhabitant of somewhere.");
        a_suf.push("ary~1. Of or pertaining to.\n\n2. (mathematics) Having the specified arity.");
        a_suf.push("ase~1. Used to form the names of enzymes.");
        a_suf.push("asone~1. (chemistry) Used to form names of generic corticosteroid drugs.");
        a_suf.push("ast~1. Someone associated with something");
        a_suf.push("aster~1. Used to form diminutive and pejorative nouns, labeling someone pretending to be what they are not.");
        a_suf.push("astic~1. Used to form adjectives from nouns, often with the meaning meaning \"of, or relating to\".");
        a_suf.push("ate~1. (in adjectives) Having the specified thing.\n\n2. (in adjectives) Characterized by the specified thing.\n\n3. (in adjectives) Resembling the specified thing.\n\n4. (in nouns) A thing characterised by the specified thing.\n\n5. (in nouns) A rank or office.\n\n6. (chemistry, in nouns) A derivative of a specified element or compound; especially a salt or ester of an acid whose name ends in -ic.\n\n7. (in verbs) To act in the specified manner.");
        a_suf.push("athlon~1. Contest.");
        a_suf.push("ation~1. An action or process.\n\n2. The result of an action or process.\n\n3. A state or quality.");
        a_suf.push("ative~1. Of, related to, or associated with the thing specified");
        a_suf.push("ator~1. Used to form agent nouns, usually from verbs that have the ending -ate");
        a_suf.push("atory~1. Forms adjectives of, relating to, or connected with the thing specified.\n\n2. Forms nouns that represent things or places where a specified activity takes place.");
        a_suf.push("azepam~1. (chemistry) Used to form names of generic drugs derived from benzodiazepine.");
        a_suf.push("azodone~1. (chemistry) Used to form names of generic antidepressant drugs.");
        a_suf.push("azolam~1. (chemistry) Used to form names of generic drugs derived from benzodiazepine.");
        a_suf.push("azosin~1. (chemistry) Used to form names of generic drugs that function as alpha blockers.");
    break;
    case 1:
        b_suf.push("bie~1. Combined with a descriptor conveying a characteristic (such as skill, experience, or social position) to form words for people.");
        b_suf.push("bility~1. Forms a noun from a verb; (alternate of ability/ibility), inclination or suitability for a specified function or condition.");
        b_suf.push("biont~1. (biology) A discrete living organism that has a specified mode of living.");
        b_suf.push("biosis~1. (biology) A specified way of living.");
        b_suf.push("biotic~1. Used to form adjectives describing a method of living.\n\n2. Used to form nouns describing organisms having a specified method of living.");
        b_suf.push("bital~1. (pharmacology) Used to form generic names of barbiturate drugs.");
        b_suf.push("blast~1. An immature cell or tissue.");
        b_suf.push("blastic~1. Having a specified number or type of elements that go on to form other bodies.\n\n2. Of or relating to an immature cell or tissue.");
        b_suf.push("boro~1. (Synonym of -borough) Placename suffix, indicated site of a fortified place.");
        b_suf.push("bot~1. Automatic systems, computer programs and machines.");
        b_suf.push("bound~1. Moving or travelling towards.");
        b_suf.push("burgh~1. (Synonym of -burgh) Place name suffix, indicating the site of a fortified place.");
        b_suf.push("bury~1. A placename suffix indicating a fortified place.");
        b_suf.push("by~1. (In place names) Habitation");
    break;
    case 2:
        c_suf.push("cade~1. A procession of a given thing.");
        c_suf.push("caine~1. (organic chemistry, pharmacology) A synthetic alkaloid used as an anesthetic.");
        c_suf.push("cardia~1. (medicine) Heart condition.");
        c_suf.push("care~1. Used to denote a plan that provides health care services.");
        c_suf.push("carp~1. Part of a fruit or fruiting body.");
        c_suf.push("carpic~1. (Alternative form of -carpous) Having a specified number or type of fruit or fruiting bodies or part thereof.");
        c_suf.push("carpous~1. Having a specified number or type of fruit or fruiting bodies or part thereof.");
        c_suf.push("cast~1. Forming words for audiovisual content distributed to an audience, usually in a manner denoted by the word stem.");
        c_suf.push("cc~1. (Internet slang, humorous) Used to replace 'ck' at the end of a word or syllable. Does not alter the definition (apart from making words jocular), nor the pronunciation.");
        c_suf.push("ce~1. (chiefly after 1, 2 or 3) Times: used to form a multiplicative numeral from a cardinal numeral.");
        c_suf.push("cele~1. (medicine) A tumour.\n\n2. (medicine) A hernia.");
        c_suf.push("cene~1. (geology) Related to the geologic period called the Cenozoic, the current one.");
        c_suf.push("centesis~1. (medicine) Puncture and aspiration of.");
        c_suf.push("centric~1. Having a specified number of centres.\n\n2. Having a specified object at the centre, or as the focus of attention.");
        c_suf.push("centrism~1. A focus on, or belief in the superiority of, one culture, people, place, or other thing.");
        c_suf.push("cephalic~1. (type or number of) Head.");
        c_suf.push("cephalous~1. (anatomy) Head");
        c_suf.push("cephaly~1. (medicine, pathology) Head.");
        c_suf.push("ception~1. (slang) Combined with a noun to indicate a layering, nesting, or recursion of the thing in question.");
        c_suf.push("chan~1. (anime and manga fandom) Appended to a person's name (usually a female, child, a close friend, or an intimate) to add politeness. It is sometimes used to denote cuteness or familiarity.");
        c_suf.push("chezia~1. (literally and figuratively, forms nouns) defecation.");
        c_suf.push("chore~1. An organism that spreads by a specified agent, or in a specified manner.");
        c_suf.push("choron~1. (geometry) Used to form the names of 4-dimensional solids bounded by a certain number of cells/polyhedra (polychora).");
        c_suf.push("chorous~1. (biology, botany) Spread, or (especially) having seeds which are dispersed, by (some specified animal, etc).");
        c_suf.push("chory~1. Method of plant or seed dispersal.");
        c_suf.push("chrome~1. Having a specified colour.\n\n2. Various pigments.");
        c_suf.push("cidal~1. Used to make adjectives corresponding to nouns ending in -cide.");
        c_suf.push("cide~1. Killing.\n\n2. Killer.");
        c_suf.push("cillin~1. (pharmacology) Used to form names of generic penicillin antibiotic drugs.");
        c_suf.push("cin~1. Bacteriocin, (biochemistry) any of a class of antibiotic toxins, produced by some bacteria, that target closely related bacteria.");
        c_suf.push("clase~1. (mineralogy) Fracture (having a fracture of such a form).");
        c_suf.push("clast~1. Something that breaks or destroys.");
        c_suf.push("clinal~1. Having a specified slope.");
        c_suf.push("cline~1. A specified form of slope or gradation.");
        c_suf.push("clinic~1. Having a specified slope.\n\n2. (of a crystal etc) Having a specified number of oblique axial intersections.");
        c_suf.push("cocci~1. (plural of -coccus) Any spherical microorganism.");
        c_suf.push("coel~1. A cavity.");
        c_suf.push("coele~1. (Alternative spelling of -coel) A cavity.\n\n2. (Alternative spelling of -cele) A tumour or a hernia.");
        c_suf.push("colous~1. Having a specified habitat.");
        c_suf.push("core~1. Applied to various (often specialised and underground) genres of music and subcultures.");
        c_suf.push("corn~1. Horn(s).");
        c_suf.push("cracy~1. Rule.");
        c_suf.push("craft~1. Denoting a skill of a particular kind.\n\n2. Denoting a vehicle of a particular type.");
        c_suf.push("crasy~1. Temperament; constituent pattern.");
        c_suf.push("crat~1. A participant in a specified form of government.\n\n2. An advocate of a specified form of government.");
        c_suf.push("cratic~1. used to form adjectives, of or befitting -cracy.\n\n2. Used to form adjectives, of or befitting -crat.");
        c_suf.push("crete~1. Indicating a material functionally similar to concrete.\n\n2. Indicating having to do with concrete.");
        c_suf.push("cross~1. (sports) Forms the names of sports that involve racing across an artificial cross-country course of bumps, jumps, drop-offs, troughs, curves, and such.");
        c_suf.push("cy~1. (non-productive) Used to form nouns of state, condition or quality e.g. obstinacy.\n\n2. (non-productive) Used to form nouns of rank or office e.g. abbacy.");
        c_suf.push("cycline~1. (pharmacology) Used to form names of generic tetracycline antibiotic drugs.");
        c_suf.push("cyte~1. Used to form cell names and classifications for mature cells.");
    break;
    case 3:
        d_suf.push("'d~1. (archaic or poetic) -ed.\n\n2. Sometimes used to form the past tense of some verbs that are in the form of numerals, letters, and abbreviations, especially in online communication.");
        d_suf.push("d~1. Alternative form of -ed now only standard with words which end in -e, but historically permissable in all the same places as -ed.\n\n2. An empty suffix, perhaps derived from the past-tense suffix above, added in some dialects to the present tense forms of some words which then add an additional -ed in the past tense.\n\n3. Marks ordinals written in digits when the final term of the spelled number is \"second\" or \"third\".");
        d_suf.push("dactyl~1. (chiefly zoology) digits (A digit is one of several most distal parts of a limb, such as fingers or toes, present in many vertebrates).");
        d_suf.push("dar~1. (usually humorous) Forming nouns denoting a putative ability to detect a thing.");
        d_suf.push("dazole~1. (pharmacology) Used to form names of generic anthelmintic or antibiotic drugs.");
        d_suf.push("derm~1. Skin or covering.");
        d_suf.push("derma~1. Skin or skin disease.");
        d_suf.push("dermatous~1. Having a specified type skin.");
        d_suf.push("diene~1. (organic chemistry) An unsaturated hydrocarbon with two double bonds; a diene.\n\n2. (organic chemistry) A polymer of such a diene.");
        d_suf.push("dipine~1. (pharmacology) Used to form names of generic calcium channel blocker drugs.");
        d_suf.push("dipsia~1. Thirst");
        d_suf.push("dom~1. Forming nouns denoting the condition or state of the suffixed word.\n\n2. Forming nouns denoting the domain or jurisdiction of the suffixed word.\n\n3. Forming nouns — usually nonce words — denoting the set of all examples of the suffixed word.\n\n4. (fandom slang) Forming nouns denoting the fandom of the suffixed word.");
        d_suf.push("drome~1. (literary) Forms placenames related to racetracks (now especially large covered racetracks) or similar structures.");
        d_suf.push("dromous~1. Running or moving in a specified manner.");
        d_suf.push("dromate~1. (pharmacology) Used to form names of generic bisphosphonate drugs.");
    break;
    case 4:
        e_suf.push("ean~1. Forms adjectives, usually from proper nouns.");
        e_suf.push("ectomy~1. Excision of.\n\n2. (surgery) Surgical removal of.");
        e_suf.push("ed~1. Used to form past tenses of (regular) verbs. In linguistics, it is used for the base form of any past form.\n\n2. when used along with an adjective preceding the noun, describes something that has an object of a particular quality.");
        e_suf.push("ee~1. Added to transitive verbs to form words meaning a person or thing that is the object of that verb (ie, to whom or to which an action is done).\n\n2. Less commonly added to intransitive verbs to form words meaning a person or thing that is the subject of that verb (that is, who or that does an action), especially where a passive sense of the verb is implied.\n\n3. (law) Used to form words meaning a person who is the other party to a contract or other transaction involving a person described by the corresponding word ending in -or.\n\n4. (medicine) Used to form words meaning a person who has undergone a particular medical procedure.\n\n5. Irregularly added to nouns to mean a person somehow associated with the object denoted by the noun.");
        e_suf.push("eer~1. Used to create an agent noun denoting someone associated with, concerned with, or engaged in a specified activity.");
        e_suf.push("eh~1. (humorous, Internet slang) Used to replace -y, often in lolcat speak.");
        e_suf.push("el~1. Suffix forming nouns, originally denoting an instrument, from verbs, usually spelt -le except after n and e.\n\n2. Diminutive suffix in words of Germanic origin.");
        e_suf.push("elect~1. Used after a title to indicate that the person has been elected to hold the title, but has not yet officially taken it.");
        e_suf.push("elle~1. Used to form feminine proper names.");
        e_suf.push("eme~1. Indicating a fundamental unit in some kind of structure, chiefly linguistic structure.");
        e_suf.push("emia~1. (chiefly US) Alternative spelling of -aemia: (British spelling, medicine) blood; state or condition of the blood.");
        e_suf.push("en~1. Denotes the past participle form when attached to a verb.\n2. Denotes a quasi-past participle or participle-like adjective when attached to a noun or verb.\n3. When attached to certain adjectives, it forms a transitive verb whose meaning is, to make (adjective).");
        e_suf.push("ence~1. (non-productive) Same as -ance; having the state or condition of.");
        e_suf.push("enchyma~1. (biology) Cellular tissue.");
        e_suf.push("ency~1. Forming abstract nouns denoting states, conditions, or qualities.");
        e_suf.push("end~1. Forming nouns denoting patients or recipients of actions.");
        e_suf.push("ene~1. (organic chemistry) An unsaturated hydrocarbon having at least one double bond; an alkene.\n\n2. (organic chemistry) An aromatic hydrocarbon based on benzene.\n\n3. A polymer derived from an alkene.");
        e_suf.push("ennial~1. Combining form denoting years.");
        e_suf.push("ent~1. Causing, promoting, or doing a certain action.\n\n2. One that causes, promotes, or does a certain action.");
        e_suf.push("enyl~1. (organic chemistry) Suffix for alkenyl functional groups.");
        e_suf.push("eous~1. Used with nouns to form adjectives with the sense of resembling to or having the characteristics of the suffixed term; similar to -ous.\n\n2. Used to form adjectives meaning resembling or having characteristics of the related term.");
        e_suf.push("'er~1. Variant form of -er used in words ending with an abbreviation or (sometimes) a number.");
        e_suf.push("er~1. (added to verbs) A person or thing that does an action indicated by the root verb; used to form an agent noun.\n\n2. (added to verbs, informal) A person or thing to which the root verb can satisfactorily be done.\n\n3. (added to a noun denoting an occupation) A person whose occupation is (the noun).\n\n4. (added to a number, measurement or noun denoting a quantified set) A name for a person or thing that is based on a number (with or without a noun).\n\n5. (slang, chiefly entertainment, with few limitations) Used to form nouns shorter than more formal synonyms.\n\n6. (informal, added to a noun) One who enjoys.\n\n7. (derogatory, added to nouns) Person who subscribes to a particular conspiracy theory or unorthodox belief.");
        e_suf.push("ergic~1. (chiefly biochemistry) Produced or activated by (the specified thing).");
        e_suf.push("ergy~1. Work.");
        e_suf.push("ern~1. (nonstandard outside fossilized words) Added to the names of directions to form adjectives.");
        e_suf.push("eroo~1. (informal) Added to certain nouns to form familiar diminutives, normally with jocular or light-hearted intent.");
        e_suf.push("eroonie~1. Embellished form of -eroo.");
        e_suf.push("ers~1. (informal, originally school slang) Used to form mostly adjectives used informally.");
        e_suf.push("ery~1. Added to nouns to form other nouns meaning the \"art, craft, or practice of.\"\n\n2. Added to verbs to form nouns meaning \"place of\" (an art, craft, or practice).\n\n3. Added to nouns to form other nouns meaning \"a class, group, or collection of.\"\n\n4. Added to nouns to form other nouns meaning \"behavior characteristic of.\"");
        e_suf.push("es~1. Used to form the regular plural of nouns.");
        e_suf.push("esce~1. Used to form verbs from nouns, following the pattern of verbs derived from Latin verbs ending in -esco.");
        e_suf.push("escence~1. A specified process or state.");
        e_suf.push("escent~1. Beginning to be; becoming.\n\n2. Resembling.");
        e_suf.push("ese~1. Used to form adjectives and nouns describing things and characteristics of a city, region, or country, such as the people and the language spoken by these people.\n\n2. Used to form nouns meaning the jargon used by a particular profession or in a particular context.");
        e_suf.push("esis~1. Used to form nouns denoting condition, action, or process.");
        e_suf.push("esque~1. In the style or manner of; appended to nouns, especially proper nouns, and forming adjectives.\n\n2. Resembling; appended to nouns, especially proper nouns, and forming adjectives.");
        e_suf.push("ess~1. Suffix appended to words to make a female form.");
        e_suf.push("est~1. Used to form the superlative of adjectives and adverbs.");
        e_suf.push("et~1. Used to form diminutives, loosely construed.");
        e_suf.push("eth~1. (archaic) Used to form the third-person singular present indicative of verbs.\n\n2. (humorous) replaces -s or -es (of verb forms and noun plurals), or is appended to other verb forms, forming nonce, pseudoarchaic versions of the word.\n\n3. used to create ordinal numbers from cardinal numbers ending in -y, namely the multiples of ten (other than ten itself): 20, 30, 40, 50, 60, 70, 80, and 90; e.g. twentieth, thirtieth.");
        e_suf.push("etic~1. Used to form adjectives, meaning \"pertaining to\", derived from nouns, most of which end in -esis.");
        e_suf.push("ette~1. Used to form nouns meaning a smaller form of something.\n\n2. Used to form nouns meaning the female equivalent of.\n\n3. Used to form nouns meaning an imitation or substitute of something.\n\n4. (Polari) Used to form nouns with a Polari context or an association with gay subculture.");
        e_suf.push("ety~1. Added to monosyllabic words, typically nouns or adjectives, to extend their form. Often seen in fanciful compounds.");
        e_suf.push("ex~1. Used to construct company and product names that borrow meaning from the root word.");
        e_suf.push("exia~1. (pathology) Forms the names of functional diseases or of conditions such as pyrexia or cachexia.");
        e_suf.push("ey~1. Alternative form of -y.\n\n2. Alternative form of -ie.");
    break;
    case 5:
        f_suf.push("facient~1. Causing the specified condition.");
        f_suf.push("faction~1. Production, process, making.");
        f_suf.push("fenac~1. (pharmacology) Used to form names of generic nonsteroidal anti-inflammatory drugs.");
        f_suf.push("ferous~1. Used to form adjectives from nouns, producing the specified material.\n\n2. Used to form adjectives from nouns, containing the specified material.");
        f_suf.push("fest~1. A festival, a fest; used in names of events.\n\n2. (informal) Appended to a noun to denote a thing, especially an event or artistic work, characterized by the noun's referent.");
        f_suf.push("fication~1. Alternative form of -ification: The process of becoming.");
        f_suf.push("fier~1. One who, or that which, does what is indicated by the stem (usually a verb).");
        f_suf.push("fix~1. (grammar) Forming nouns denoting a morpheme used in word formation joined to a word in the specified way\n\n2. (chiefly grammar) Forming verbs denoting fastening or attaching (something) in the specified way.");
        f_suf.push("foxacin~1. (pharmacology) Used to form names of generic fluoroquinolone antibiotics.");
        f_suf.push("fold~1. Used to make adjectives meaning times.\n\n2. Used to make adverbs meaning times.");
        f_suf.push("form~1. Having the shape or form of; looking like.");
        f_suf.push("free~1. Free from; devoid of; without.");
        f_suf.push("fu~1. (slang) Used to form nouns indicating expertise or mastery of specified skill or area of knowledge.");
        f_suf.push("fugal~1. Travelling out from.");
        f_suf.push("ful~1. Used to form adjectives from nouns. Full of, tending to, or thoroughly possessing the quality expressed by the noun.");
        f_suf.push("furter~1. (chiefly US) German-style food, especially wursts or sausages.");
        f_suf.push("fy~1. Alternative form of -ify: to produce verbs meaning to make.");
    break;
    case 6:
        g_suf.push("gamous~1. Having the specified number or form of marriage.\n\n2. Having the specified form of reproduction, or reproductive organs.");
        g_suf.push("gamy~1. Used to form nouns describing forms of marriage.\n\n2. (biology) Used to form nouns describing forms of fertilization, pollination or reproduction.");
        g_suf.push("gasm~1. (informal) An intensely \"explosive\" or pleasurable experience or thing.");
        g_suf.push("gate~1. Combined with keywords to form the names of scandals.");
        g_suf.push("gaze~1. (music) Denotes a genre of music which makes heavy use of distortion effects and wall of sound production.");
        g_suf.push("geddon~1. Denoting a catastrophic event caused by or related to the stem word.");
        g_suf.push("gen~1. A producer of something, e.g. hydrogen.");
        g_suf.push("genesis~1. Origin.\n\n2. Production.");
        g_suf.push("genic~1. Producing or generating something.\n\n2. Produced or generated by something.\n\n3. Suitable to be produced, or reproduced.");
        g_suf.push("genin~1. (chemistry) Used to form words for the aglycone (non-saccharide) residues of steroidal glycosides.");
        g_suf.push("genous~1. Producing or yielding.");
        g_suf.push("geny~1. Production.\n\n2. Generation.\n\n3. Origin.");
        g_suf.push("gerous~1. Bearing or producing.");
        g_suf.push("gliptin~1. (pharmacology) Used to form generic names of DPP-4 inhibitor antidiabetic drugs.");
        g_suf.push("glot~1. Language.\n\n2. (anatomy) Tongue.");
        g_suf.push("gnathous~1. (biology) Having a specified type of jaw.");
        g_suf.push("gon~1. (geometry) Forms the names of plane figures containing a given number of angles, and thus bounded by that number of line segments (polygons). If the number is large enough, it can take the hyphenated suffix directly.");
        g_suf.push("gony~1. Forms nouns that describe the genesis of a class of thing.");
        g_suf.push("gram~1. Something written, drawn or otherwise recorded.");
        g_suf.push("gramme~1. Alternative form of -gram: something written, drawn or otherwise recorded.");
        g_suf.push("graph~1. That writes.\n\n2. (metonymically) That is written.\n\n3. (by analogy) That draws or shows.\n\n4. (metonymically) Photograph that is drawn or shown.\n\n5. A group of letters of a specified number.");
        g_suf.push("grapher~1. Someone who writes about a specified subject, or in a specified manner.\n\n2. A machine which notates a specified subject.");
        g_suf.push("graphical~1. Used to form adjectives meaning of or relating to corresponding nouns ending in -graphy or -graph.");
        g_suf.push("graphy~1. Something written or otherwise represented in the specified manner, or about a specified subject.\n\n2. Field of study.");
        g_suf.push("grave~1. Signifying a ruler, as in landgrave, margrave, burgrave.");
        g_suf.push("gyny~1. The state of having a specific number of wives.\n\n2. (botany) A situation with respect to female plant organs.\n\n3. (botany) Having a specified number or type of female plant organs.");
    break;
    case 7:
        h_suf.push("happy~1. Having excessive devotion or enthusiasm.\n\n2. Euphoric, giddy, or crazed.");
        h_suf.push("head~1. Used to create nouns indicating a state, similar to the suffix -hood.");
        h_suf.push("hedra~1. Plural of -hedron: (geometry) forms the names of solid figures bounded by a certain number of planes (polyhedra).");
        h_suf.push("hedral~1. Used to form adjectives describing related nouns ending in -hedron or -hedra.");
        h_suf.push("hedron~1. (geometry) Forms the names of solid figures bounded by a certain number of planes (polyhedra).");
        h_suf.push("henge~1. Used to refer to derivatives of Stonehenge.");
        h_suf.push("holic~1. Denotes addiction to the substance or activity of the stem word.");
        h_suf.push("holism~1. a form of addiction, either physical dependency or obsessive dependency.");
        h_suf.push("hood~1. A substantive suffix denoting a condition or state of being.\n\n2. A substantive suffix denoting a group sharing a specified condition or state.");
        h_suf.push("hour-old~1. Suffix used to indicate the age of something or someone, in terms of hours.");
    break;
    case 8:
        i_suf.push("i~1. Used to form adjectives and nouns describing people of a particular city, region, or country, and the language spoken by these people.\n\n2. Used to indicate a plural form of some words of Latin or Italian origin, such as fungi, virtuosi or concerti.");
        i_suf.push("ia~1. Used in forming names of countries, diseases, flowers, and rarely collections of things (such as militaria, deletia).\n\n2. Used in forming plurals of nouns in -ium and -ion.");
        i_suf.push("iad~1. Forming the name of an epic about the indicated topic.\n\n2. (rare) A period of time from one occurrence of an (indicated, regularly recurrent) event to the next.");
        i_suf.push("ial~1. Forms an adjective from a noun.");
        i_suf.push("ian~1. (as an adjective) From, related to, or like.\n\n2. (as a noun) One from, belonging to, relating to, or like.\n\n3. (as a noun) Having a certain profession.");
        i_suf.push("iana~1. Alternative form of -ana: a collection of things that relate to a specific place, person, etc.");
        i_suf.push("iasis~1. (pathology) A pathological condition or process.");
        i_suf.push("iatric~1. Of or relating to a physician.\n\n2. Pertaining to a particular branch of medicine.");
        i_suf.push("iatrician~1. A medical practicioner.");
        i_suf.push("iatrics~1. Forms a noun meaning a specialty medical field of practice.");
        i_suf.push("iatry~1. Forms names of specialized fields of medical practice.");
        i_suf.push("ibility~1. Alternative form of -ability: forms a noun from a verb; ability, inclination or suitability for a specified function or condition.");
        i_suf.push("ible~1. An adjective suffix, now usually in a passive sense; forms adjectives meaning \"able to be\", \"relevant or suitable to, in accordance with\", or expressing capacity or worthiness in a passive sense.\n\n2. An instrumental suffix; forms nouns representing: a tool or instrument, or a place or location.");
        i_suf.push("ibly~1. Used to form adverbs corresponding to adjectives that end in -ible.");
        i_suf.push("ic~1. Used to form adjectives from nouns with the meaning \"of or pertaining to\".\n\n2. (chemistry) Used to denote certain chemical compounds in which a specified chemical element has a higher oxidation number than in the equivalent compound whose name ends in the suffix -ous.");
        i_suf.push("ica~1. A collection of things that relate to a specific place, person, theme, etc.");
        i_suf.push("ical~1. Used to form adjectives from nouns with the meaning \"of or pertaining to\"; adjectival suffix appended to various words, often nouns, to make an adjective form. Often added to words of Greek or Latin origin, but used with other words also.");
        i_suf.push("ice~1. (obsolete) Forms abstract nouns.");
        i_suf.push("ician~1. Forming nouns denoting occupations.");
        i_suf.push("icide~1. Alternative form of -cide: killing, or killer.");
        i_suf.push("icism~1. Forms abstract nouns from Greek or Latin bases.");
        i_suf.push("icity~1. Used to form nouns, denoting a quality or condition, from adjectives, especially ones ending in -ic (in which case \"ic\" is not duplicated (see -ity)).");
        i_suf.push("ick~1. Obsolete form of -ic: Used to form adjectives from nouns with the meaning \"of or pertaining to\".");
        i_suf.push("icle~1. Icicle.");
        i_suf.push("ics~1. Forms nouns referring to fields of knowledge or practice.\n\n2. Forms nouns referring to activities.");
        i_suf.push("id~1. (not productive except in zoology) of or pertaining to; appended to various foreign words to make an English adjective or noun form. Often added to words of Greek, sometimes Latin, origin.\n\n2. (chiefly botany) Forming nouns from Latin or Greek roots, including certain plant names modelled on Latin sources, and the names of certain dynasties, being suffixed to the name of their progenitors and meaning \"descendant(s) of\", e.g. Solomonid, Abbasid.\n\n3. (astronomy) Forming common names of meteors from their apparent constellation of origin.\n\n4. (zoology) Forming common names of members of a taxon which has a name ending in -idae.");
        i_suf.push("ide~1. Any of a group of related compounds - azide, polysaccharide, glycoside.\n\n2. A binary compound - bromide, arsenide, palladide.\n\n3. Any of a group of several elements - lanthanide.");
        i_suf.push("idine~1. (organic chemistry) Denotes a chemical compound containing a ring containing nitrogen.\n\n2. (pharmacology) Alpha-2 adrenergic receptor agonists.");
        i_suf.push("ie~1. Forming diminutive or affectionate forms of nouns or names.\n\n2. (occasionally, sometimes derogatory) Forming colloquial nouns signifying the person associated with suffixed noun or verb.");
        i_suf.push("ienne~1. Feminine of -ien; indicates a female variant of a noun ending in -ian.");
        i_suf.push("ier~1. Variant of -er for adjectives ending in y.");
        i_suf.push("ies~1. Used to form the plural forms of nouns endings in consonant-y.\n\n2. Used to form the third person singular of the indicative of verbs ending in consonant-y.");
        i_suf.push("iety~1. Forming nouns denoting the quality or condition of being what is indicated by the first element of the word.");
        i_suf.push("iferous~1. Alternative form of -ferous: used to form adjectives from nouns, producing or containing the specified material.");
        i_suf.push("ific~1. Creating or causing something.\n\n2. (informal) Very; extremely; forming adjectives from nouns.");
        i_suf.push("ification~1. The process of becoming.");
        i_suf.push("iform~1. Alternative form of -form: having the shape or form of; looking like.");
        i_suf.push("ify~1. To produce verbs meaning to make.");
        i_suf.push("ile~1. (non-productive) Tending to, or capable of.");
        i_suf.push("illiard~1. Combined with Latin prefixes for names of integers in order to form names of large numbers.");
        i_suf.push("illion~1. Combined with Latin prefixes for names of integers in order to form names of powers of a million or of a thousand greater than 1,000,000. Thus we have the names billion, trillion, etc.\n\n2. Added to various nonsense syllables to indicate an arbitrarily very large number.");
        i_suf.push("ily~1. Forms adverbs from nouns and verbs whose derived adjectives are suffixed with -y.");
        i_suf.push("imundo~1. (slang) Nonsense suffix added to adjectives to give emphasis.");
        i_suf.push("in~1. (biochemistry) Used, as a modification of -ine, to form the names of a variety of types of compound; examples include proteins (globulin), carbohydrates (dextrin), dyes (alizarin) and others (vanillin).\n\n2. (proscribed, dialect or eye dialect) Alternative form of -ing.");
        i_suf.push("in'~1. (proscribed, eye dialect) Alternative form of -ing");
        i_suf.push("inda~1. A component of some female given names.");
        i_suf.push("ine~1. (chiefly non-productive) Of or pertaining to.\n\n2. Used to form demonyms.\n\n3. (chemistry) Used to form names of chemical substances, especially basic (alkaline) substances, alkaloidal substances, or halogen elements.\n\n4. (non-productive) Used to form feminine nouns.\n\n5. (non-productive) Used to form female given names or names of titles.\n\n6. Commercial materials.\n\n7. Can be used to denote the plural form of a small number of English words.");
        i_suf.push("ing~1. Used to form gerunds, a type of verbal nouns, from verbs.\n\n2. Used to form uncountable nouns from verbs denoting the act of doing something, an action.\n\n3. Used to form uncountable nouns from various parts of speech denoting materials or systems of objects considered collectively.\n\n4. Used to form present participles of verbs.\n\n5. Forming derivative nouns (originally masculine), with the sense ‘son of, belonging to’, as patronymics or diminutives. No longer productive in either sense.\n\n6. Having a specified quality, characteristic, or nature; of the kind of.");
        i_suf.push("ino~1. (physics) The fermionic supersymmetric partner of a boson (a bosino), symbolized by a tilde over the nonsupersymmetric particle symbol.");
        i_suf.push("ion~1. (non-productive) An action or process, or the result of an action or process.\n\n2. (non-productive) A state or condition.");
        i_suf.push("iot~1. Of or relating to an island or peninsula in Greece or the Hellenic sphere.");
        i_suf.push("iour~1. (no longer productive) Suffix added to verbs to form nouns.\n\n2. Alternative form of -our.");
        i_suf.push("ious~1. Alternative spelling of -ous: Used to form adjectives from nouns, to denote possession or presence of a quality in any degree, commonly in abundance.");
        i_suf.push("isation~1. (British spelling) alternative form of -ization: a suffix forming nouns denoting the act, process, or result of doing something, or of making something.");
        i_suf.push("ise~1. Alternative form of -ize used in certain words.\n\n2. Suffix used in loanwords from French to form abstract nouns of quality or function.");
        i_suf.push("ish~1. (of adjectives from common nouns) Typical of, similar to, being like.\n\n2. (of adjectives from adjectives, with a diminutive force) Somewhat, rather.\n\n3. (of adjectives from numbers, especially of times and ages) About, approximately.\n\n4. (of adjectives from roots of proper nouns denoting names of nations or regions) Of, belonging or relating to (a nationality, place, language or similar association with something).");
        i_suf.push("ism~1. Used to form nouns of action or process or result based on the accompanying verb in -ise or -ize.\n\n2. Used to form the name of a system, school of thought or theory based on the name of its subject or object or alternatively on the name of its founder.\n\n3. Used to form names of a tendency of behaviour, action, state, condition or opinion belonging to a class or group of persons, or the result of a doctrine, ideology or principle or lack thereof.\n\n4. Used to form nouns indicating a peculiarity or characteristic of language.\n\n5. Used to form names of ideologies expressing belief in the superiority of a certain class within the concept expressed by the root word, or a pattern of behavior or a social norm that benefits members of the group indicated by the root word.\n\n6. (medicine) Used to form names of conditions or syndromes.");
        i_suf.push("ismus~1. Forming compound nouns describing a condition or system.");
        i_suf.push("ist~1. Added to words to form nouns denoting:\n\na. A person who studies or practices a particular discipline;\n\nb. A person who uses a device of some kind;\n\nc. One who engages in a particular type of activity;\n\nd. One who suffers from a specific condition or syndrome;\n\ne. One who subscribes to a particular theological doctrine or religious denomination;\n\nf. One who owns or manages something;\n\ng. A person who holds bigoted, partial views.");
        i_suf.push("ista~1. Forms nouns denoting one who follows a principle; an adept.");
        i_suf.push("istic~1. Used to form adjectives from nouns or from other adjectives, with the meaning \"of or pertaining to\" the preceding component.");
        i_suf.push("istical~1. Used to form adjectives meaning of or relating to corresponding nouns ending in -istic or -ist; most often redundant with respect to the latter which can also become adjectives through the addition of -ic alone, or with no change to the root noun. Hence, theist, theistic and theistical can all be used as the adjective form of theism.");
        i_suf.push("istically~1. Used to form adverbs describing action in the manner of the root adjective; use is identical irrespective of whether the root adjective ends with -istic or -istical.");
        i_suf.push("it-all~1. (informal) A nominalizing suffix deriving from verbs.");
        i_suf.push("ite~1. (sometimes derogatory) Used to form nouns denoting followers or adherents of a specified person, idea, doctrine, movement, etc.\n\n2. Used to form nouns denoting descendants of a specified historical person, especially a biblical figure.\n\n3. (chiefly US) Used to form demonyms.\n\n4. Used to form nouns denoting rocks or minerals.\n\n5. Used to form nouns denoting fossil organisms.\n\n6. (biology) Used to form nouns denoting segments or components of the body or an organ of the body.\n\n7. Used to form nouns denoting the product of a specified process or a commercially manufactured product.\n\n8. (chemistry) Used to form names of certain chemical compounds, especially salts or esters of acids whose name ends in -ous.\n\n9. Forms adjectives.");
        i_suf.push("itis~1. (pathology) Suffix denoting diseases characterized by inflammation, itself often caused by an infection.\n\n2. (humorous) Used to form the names of various fictitious afflictions or diseases.");
        i_suf.push("itol~1. Polyhydric alcohols.");
        i_suf.push("itude~1. State of.");
        i_suf.push("ity~1. Used to form a noun from an adjective; especially, to form the noun referring to the state, property, or quality of conforming to the adjective's description.\n\n2. Used to form other nouns, especially abstract nouns.");
        i_suf.push("ium~1. (chemistry) Used to form the names of metal elements, after the style of early-named elements, as well as the isotopes of hydrogen.\n\n2. (chemistry) Used to form the temporary systematic element name of a metallic or nonmetallic element which is postulated to exist, or which has been newly synthesized and has not yet been assigned a permanent name.\n\n3. (by extension, humorous) Appended to common words to create scientific-sounding or humorous-sounding fictional substance names.\n\n4. Used to form the name of an aggregation or mass of something, such as biological tissue: for example, epithelium, pollinium. Words so formed often form their plural with -ia.\n\n5. Used to indicate the setting where a given activity is carried out: for example, auditorium, colloquium, gymnasium, natatorium, planetarium, podium, sanatorium, stadium. Words so formed often take -a for the plural.");
        i_suf.push("ive~1. An adjective suffix signifying relating or belonging to, of the nature of, tending to, or serving to; as: affirmative, active, conclusive, corrective, diminutive.");
        i_suf.push("ization~1. A suffix forming nouns denoting the act, process, or result of doing something, or of making something.");
        i_suf.push("ize~1. Used to form verbs from nouns or adjectives: to make or do what is denoted by the noun/adjective.");
        i_suf.push("izer~1. used to form nouns which are formed from verbs from nouns or adjectives, the final nouns having the sense of \"the agent which makes what is denoted by the noun/adjective\".");
        i_suf.push("izzle~1. (slang) A slang suffix to form hip-hop-sounding words, which replaces the word with the first sound of the word followed by -izzle.");
    break;
    case 9:
        j_suf.push("ja~1. (colloquial) You, ya; only used after a /d/ sound.");
        j_suf.push("ji~1. (India) An honorific conveying respect.");
    break;
    case 10:
        k_suf.push("kin~1. (now chiefly dialectal) Used to form adjectives expressing resemblance or likeness to, similar to -like.\n\n2. A suffix used to form nouns having qualities of or belonging to a particular kind, class, or sort.\n\n3. (now archaic) Forming diminutives of nouns.");
        k_suf.push("kind~1. Used to form nouns denoting groups or classes taken collectively.");
        k_suf.push("kinesis~1. Movement, motion.");
        k_suf.push("kini~1. Indicates a type of swimwear.");
        k_suf.push("kins~1. Forming (often intentionally childish or twee) diminutives of nouns.");
        k_suf.push("kun~1. (anime and manga fandom) Appended to a young man's name or nickname to indicate familiarity.");
    break;
    case 11:
        l_suf.push("langia~1. Sexual predilection; paraphilia.");
        l_suf.push("lalia~1. Forming nouns denoting abnormal or disordered forms of speech.");
        l_suf.push("land~1. Used to form the name of a territory, country, or region.\n\n2. Used to form the name of a sphere of activity or interaction.");
        l_suf.push("landia~1. (humorous) A fictional or metaphorical place relating to the person or thing being suffixed.");
        l_suf.push("latry~1. Worship of.");
        l_suf.push("le~1. A frequentative suffix of verbs, indicating repetition or continuousness.\n\n2. A suffix forming adjectives from verbs with the meaning of \"prone to\", \"tending to\", \"apt to\", \"capable of\"; compare -ative.\n\n3. A suffix forming agent nouns from verbs.\n\n4. A suffix forming diminutives from other nouns; compare -ling.");
        l_suf.push("lecithal~1. Related to the yolk of an egg.");
        l_suf.push("lect~1. (language) Variety.");
        l_suf.push("leigh~1. Suffix forming female given names.");
        l_suf.push("lepsy~1. A specified form of fit or seizure.");
        l_suf.push("lept~1. (palynology) Having pollen grains with one or more leptomata, thin edges near the pole.");
        l_suf.push("leptic~1. Of or relating to a condition of seizing, as in nympholeptic.\n\n2. A person who is afflicted with a condition prone to cause violent seizures, as in epileptic.");
        l_suf.push("less~1. Lacking (something); without (something). Added usually to a noun to form an adjective signifying a lack of that noun.");
        l_suf.push("let~1. A diminutive suffix.\n\n2. Piece; as in a suit of armor for example.");
        l_suf.push("licious~1. Used to form intensified adjectives indicating deliciousness, from nouns and adjectives.");
        l_suf.push("like~1. Having some of the characteristics of (used to form adjectives from nouns).");
        l_suf.push("lin~1. (dialectal) Alternative form of -ling.");
        l_suf.push("ling~1. Small, immature, miniature.\n\n2. Follower or resident.\n\n3. An adverbial suffix denoting manner, direction or position.");
        l_suf.push("lings~1. (now Britain dialectal) Forming adverbs, generally of condition or situation.");
        l_suf.push("lite~1. Used to form names of rocks and minerals.");
        l_suf.push("lith~1. Alternative form of -lite: alternative form of -lite.");
        l_suf.push("load~1. A quantity that fills something.");
        l_suf.push("lock~1. (no longer productive) Action or proceeding, practice, ritual.");
        l_suf.push("log~1. Discourse of a specified kind.\n\n2. Compilation.\n\n3. (rare) -logist.");
        l_suf.push("logic~1. -logical");
        l_suf.push("logist~1. A person who studies or is an expert in the related -logy.");
        l_suf.push("logs~1. Plural of -log:\n\na. Discourse of a specified kind.\n\nb. Compilation.\n\nc. (rare) -logist.");
        l_suf.push("logue~1. Used to denote discourse of a specified kind.\n\n2. Used to denote compilement.\n\n3. (rare) -logist.");
        l_suf.push("logues~1. plural of -logue:\n\na. Used to denote discourse of a specified kind.\n\nb. Used to denote compilement.\n\nc. (rare) -logist.");
        l_suf.push("logy~1. A branch of learning; a study of a particular subject.\n\n2. Something said, or a way of speaking, a narrative.");
        l_suf.push("lol~1. Used in the names of beta blocker drugs.");
        l_suf.push("long~1. Forms adjectives indicating duration when suffixed to nouns of duration.");
        l_suf.push("loquy~1. (forming nouns) Speaking, speech.");
        l_suf.push("ly~1. Used to form adjectives from nouns, the adjectives having the sense of \"like or characteristic of what is denoted by the noun\".\n\n2. Used to form adjectives from nouns specifying time intervals, the adjectives having the sense of \"occurring at such intervals\".");
        l_suf.push("lyn~1. Suffix forming female given names.");
        l_suf.push("lysis~1. Decomposition or breakdown.\n\n2. Dissolving.\n\n3. Disintegration.");
        l_suf.push("lyte~1. Word-forming element used in making nouns corresponding to nouns in -lysis and adjectives in -lytic.");
        l_suf.push("lytic~1. Used in adjectives relating to nouns with the suffix -lysis.");
    break;
    case 12:
        m_suf.push("mab~1. (pharmacology) Monoclonal antibody.");
        m_suf.push("machy~1. Forming nouns with the sense of \"battle, fight\".");
        m_suf.push("mageddon~1. Alternative form of -geddon: denoting a catastrophic event caused by or related to the stem word.");
        m_suf.push("man~1. Someone (possibly implied male) who is an expert in an area or who takes part in an activity.\n\n2. Someone (possibly implied male) who is employed or holds a position in an area.\n\n3. Someone (possibly implied male) who has special characteristics relating to a topic or area.\n\n4. Someone (possibly implied male) who has a particular nationality.");
        m_suf.push("mance~1. To carry out a specified form of divination.");
        m_suf.push("mancer~1. A practitioner of a specific type of divination.\n\n2. A user of a specified type of magic.");
        m_suf.push("mancy~1. Divination.\n\n2. Variety of magic, especially that controlling or related to a specific element, substance, or theme.");
        m_suf.push("mane~1. Forming compound nouns with the sense \"person who has a mania for\".");
        m_suf.push("maniac~1. Indicating a person who experiences a type of compulsion or obsession.");
        m_suf.push("mans~1. (obsolete, Britain, thieves' cant) Appended to adjectives to form nouns meaning \"the state of being (the adjective)\", \"the quality of being (the adjective)\", or \"the measure of being (the adjective)\".\n\n2. (obsolete, Britain, thieves' cant) Substitute for part of another word to disguise meaning.");
        m_suf.push("manship~1. Expertise, involvement, or special status in an area.");
        m_suf.push("mantic~1. Forms adjectives corresponding to nouns ending in -mancy:\n\na. Divination.\n\nb. Variety of magic, especially that controlling or related to a specific element, substance, or theme.");
        m_suf.push("mas~1. A holiday, sacred day.");
        m_suf.push("mastia~1. An abnormality of the breast.");
        m_suf.push("max~1. Denotes maximum dimensions of a vessel that can travel through the given canal.");
        m_suf.push("meal~1. (rare or no longer productive) Used to denote a fixed number, measure, or amount at a time.");
        m_suf.push("megaly~1. Enlargement.");
        m_suf.push("meister~1. An expert on the specified subject.\n\n2. A person in charge of a specified thing.\n\n3. Attached to a person's name in humorous (or ironic) approbation.");
        m_suf.push("men~1. Plural of -man:\n\na. Someone (possibly implied male) who is an expert in an area or who takes part in an activity.\n\nb. Someone (possibly implied male) who is employed or holds a position in an area.\n\nc. Someone (possibly implied male) who has special characteristics relating to a topic or area.\n\nd. Someone (possibly implied male) who has a particular nationality.");
        m_suf.push("ment~1. Used to form nouns from verbs, the nouns having the sense of \"the action or result of what is denoted by the verb\".");
        m_suf.push("mentum~1. (politics) Used in compounds with a candidate's name to indicate that their campaign is gaining momentum.");
        m_suf.push("mer~1. (chemistry) Used to form words relating to chemical structure, denoting parts of a molecule, for example, monomer (one part), dimer (two parts), polymer (many parts).");
        m_suf.push("mere~1. Forming nouns with the sense of part, segment.");
        m_suf.push("merous~1. (biology, forming adjectives) Having parts of the specified quality.\n\n2. (chiefly botany and zoology, forming adjectives) Comprising the specified number of parts.");
        m_suf.push("meter~1. Used to form the names of measuring devices.");
        m_suf.push("metre~1. (nonstandard, Britain) Alternative form of -meter (suffix used to form the names of measuring devices).");
        m_suf.push("metric~1. Forming adjectives corresponding to nouns in -meter.\n\n2. Of or relating to measurement.");
        m_suf.push("metry~1. Forming nouns relating to measures and measurement.");
        m_suf.push("micin~1. (biochemistry) Applied to aminoglycosides derived from bacteria of the genus Micromonospora.");
        m_suf.push("misia~1. Hatred; dislike; aversion.");
        m_suf.push("mo~1. (paper, printing) Used to form page and book sizes.");
        m_suf.push("mobile~1. Used to form nouns meaning a particular type of vehicle, particularly one to transport the person or thing described by the word to which the suffix is attached.");
        m_suf.push("mont~1. Forming a placename or a surname derived therefrom and denoting or connoting a hill or mountain; sometimes (as in estate names) used more for euphony and connotation than for geomorphic denotation. Word formation in English using the suffix to name towns and family estates was most productive in the mid-19th through mid-20th centuries.");
        m_suf.push("mony~1. Deadjectival suffix used to form an abstract noun usually from personal adjectives.\n\n2. Denominal and deverbal suffix used to form a noun designating a legal status, estate, property.");
        m_suf.push("more~1. (archaic) Used to form a comparative of certain adjectives and adverbs, usually ending in -er.\n\n2. Used for placenames; variant of moor.");
        m_suf.push("morph~1. Shape, form, structure.\n\n2. Morpheme.");
        m_suf.push("morphic~1. Having a specific shape or form.");
        m_suf.push("morphism~1. The state of having a specified shape or form.");
        m_suf.push("morphous~1. Having a specified shape or form.");
        m_suf.push("morphy~1. Shaped or formed.");
        m_suf.push("most~1. Furthest; -est; used to form superlatives of certain adjectives, especially directional and inherently-comparative ones.");
        m_suf.push("mycete~1. (biology, mycology) Used to form words used for categorising fungi based on their evolutionary origin, life history, growth form or ecological preferences.");
        m_suf.push("mycin~1. (biochemistry) Applied to aminoglycosides derived from bacteria of the genus Micromonospora.");
    break;
    case 13:
        n_suf.push("n~1. Alternative form of -en:\n\na. Denotes the past participle form when attached to a verb.\n\nb. Denotes a quasi-past participle or participle-like adjective when attached to a noun or verb.\n\nc. When attached to certain adjectives, it forms a transitive verb whose meaning is, to make (adjective).\n\n2. Alternative form of -an, adjective or noun suffix meaning \"of or pertaining to\", used with words which already end in a.");
        n_suf.push("nado~1. Denoting a hurricane or a whirl containing or made of the stem word.");
        n_suf.push("naissance~1. Signifying the rebirth of one's career.");
        n_suf.push("nap~1. Forming verbs with the sense of \"abduct\", or sometimes \"abscond with\".");
        n_suf.push("nasty~1. (botany) Relating to a nastic change.");
        n_suf.push("naut~1. Forms nouns meaning a voyager, farer, or tripper.");
        n_suf.push("nd~1. Marks ordinals written in digits when the final term of the spelled number is \"second\".");
        n_suf.push("nema~1. (chiefly biology) Characteristic of, pertaining to, or possessing a filiform structure.");
        n_suf.push("neme~1. (biochemistry) Alternative form of -nema: (chiefly biology) characteristic of, pertaining to, or possessing a filiform structure.");
        n_suf.push("ness~1. Appended to adjectives to form nouns meaning \"the state of being (the adjective)\", \"the quality of being (the adjective)\", or \"the measure of being (the adjective)\".\n\n2. Appended to words of other parts of speech to form nouns (often nonce words or terms in philosophy) meaning the state/quality/measure of the idea represented by these words.");
        n_suf.push("nik~1. Creates a nickname for a person who exemplifies, endorses, or is associated with the thing or quality specified (by the base form), often a particular ideology or preference.");
        n_suf.push("nom~1. Alternative form of -nym: used to form nouns describing types of word or name.");
        n_suf.push("nomics~1. The rules of a discipline.");
        n_suf.push("nomy~1. A system of rules, laws, or knowledge about a body of a particular field; distribution, arrangement, management.");
        n_suf.push("n't~1. Negates the meaning of the clause in which it occurs.");
        n_suf.push("nym~1. Used to form nouns describing types of word or name.");
        n_suf.push("nymy~1. Alternative form of -onymy: used to form nouns describing the study, formation, or use of words or names.");
    break;
    case 14:
        o_suf.push("o~1. A colloquializing suffix.\n\n2. A type of person (colloquial).\n\n3. (humorous) Converts certain words to faux Italian or Spanish. Can be used with Spanish el for expressions such as el stinko.\n\n4. Added to verb stems to create a noun describing an error relating to the action described by the verb.");
        o_suf.push("o-matic~1. Appended to titles of (often fictional) machines, especially to suggest that the verb to which the suffix is appended is its primary function.");
        o_suf.push("o-rama~1. Alternative spelling of -orama: Used to form, from one noun, a second meaning \"wide view of\" the first, or (with ironic reference to the preceding sense) \"surfeit of\", \"overattention to\", or \"exaggerated praise of\" the first.");
        o_suf.push("oate~1. (organic chemistry) Used to form the names of salts and esters of carboxylic acids e.g. benzoate, hexanoate.");
        o_suf.push("ock~1. Forming nouns from nouns, originally with a diminutive sense.");
        o_suf.push("ocracy~1. Alternative form of -cracy (a rule). Used following a consonant.");
        o_suf.push("odd~1. Plus some indeterminate fraction not amounting to the next higher round number or significant digit; and change; -some.");
        o_suf.push("ode~1. Way, path.");
        o_suf.push("odont~1. Tooth; toothed.");
        o_suf.push("odontia~1. (dentistry and medicine):\n\na. (Forms nouns) Branch of dentistry.\n\nb. (Forms nouns) Condition of the teeth.");
        o_suf.push("odynia~1. (medicine) Pain.");
        o_suf.push("oecious~1. Forms adjectives describing the arrangement of sexual organs.\n\n2. (biology) Forms adjectives describing the host of an organism.");
        o_suf.push("off~1. (suffixed to a bare infinitive) A competition [of the activity denoted by the verb], especially a final, tiebreaker, or repechage within a broader tournament.");
        o_suf.push("oholic~1. Used to make nouns and adjectives describing someone who is addicted to something or feels a compulsion to do something.");
        o_suf.push("oi~1. Plural of -os: Used to form plurals of some Hebrew and Yiddish loanwords, usually ending in -a or -ah.");
        o_suf.push("oic~1. (organic chemistry) Used to form the names of carboxylic groups and acids");
        o_suf.push("oic acid~1. (organic chemistry) A carboxylic acid functional group.");
        o_suf.push("oid~1. Of similar form to, but not the same as. Having the likeness of. Forms adjectives and nouns.");
        o_suf.push("ol~1. (organic chemistry) An alcohol or phenol.\n\n2. Indicating an oily substance.");
        o_suf.push("ola~1. Used to form the names of several commercial companies and products.\n\n2. (entertainment industry) Used to form pejorative terms associated with commercial bribery.\n\n3. Used to form humorous and pejorative words.\n\n4. Used to form words relating to oil or oiliness.");
        o_suf.push("ole~1. (organic chemistry) in the Hantzsch–Widman nomenclature for naming heterocycles, denotes an unsaturated five-membered ring system.\n\n2. A diminutive suffix referring to small parts of organisms or their cells.");
        o_suf.push("ologist~1. Alternative spelling of -logist (\"one who studies a subject\").");
        o_suf.push("ology~1. Alternative form of -logy, used for phonological reasons when the preceding morpheme ends in certain consonant sounds.\n\n2. (often humorous) added to an ordinary English word to create a name for a (possibly non-existent) field of study.");
        o_suf.push("oma~1. (pathology) Forming nouns indicating disease or morbidity.\n\n2. (pathology, specifically) Forming nouns indicating tumors or masses, which may be benign or cancerous (malignant).");
        o_suf.push("omas~1. plural of -oma:\n\na. (pathology) Forming nouns indicating disease or morbidity.\n\nb. (pathology, specifically) Forming nouns indicating tumors or masses, which may be benign or cancerous (malignant).");
        o_suf.push("omata~1. plural of -oma:\n\na. (pathology) Forming nouns indicating disease or morbidity.\n\nb. (pathology, specifically) Forming nouns indicating tumors or masses, which may be benign or cancerous (malignant).");
        o_suf.push("ome~1. A mass of something.\n\n2. (biology) The complete whole of a class of substances for a species or an individual.");
        o_suf.push("ometer~1. Alternative form of -meter: used to form the names of measuring devices.");
        o_suf.push("ometry~1. Forming compound nouns describing \"the action or process of measuring\" something, frequently with corresponding nouns in -ometer.");
        o_suf.push("omics~1. (chiefly biology) Forms nouns meaning \"a study of the totality of something\".");
        o_suf.push("on~1. (physics, mathematics and biology) Forming nouns denoting subatomic particles (proton), quanta (photon), molecular units (codon), or substances (interferon).\n\n2. (biology, genetics) Forming names of things considered as basic or fundamental units, such as codon or recon.\n\n3. (chemistry) Forming names of noble gases and certain nonmetal elements (such as boron or silicon).");
        o_suf.push("one~1. a ketone: (organic chemistry) a homologous series of organic molecules whose functional group is an oxygen atom joined to a carbon atom—by a double bond—in a carbon-hydrogen based molecule.\n\n2. Any similar compound containing a carbonyl functional group.");
        o_suf.push("onium~1. (physics) Designating an onium particle.");
        o_suf.push("onomics~1. Alternative form of -omics: (chiefly biology) Forms nouns meaning \"a study of the totality of something\".\n\n2. The rules of a discipline.");
        o_suf.push("onomy~1. Alternative form of -nomy: A system of rules, laws, or knowledge about a body of a particular field; distribution, arrangement, management.");
        o_suf.push("onym~1. Name.\n\n2. Word.");
        o_suf.push("onymy~1. Used to form nouns describing the study, formation, or use of words or names.");
        o_suf.push("oon~1. Forming nouns, mainly in borrowed words.");
        o_suf.push("ophilic~1. Alternative form of -philic: having an affinity, attraction, preference or love of something.");
        o_suf.push("opia~1. (medicine, ophthalmology) Vision (used to form names of visual defects).");
        o_suf.push("opsia~1. (ophthalmology) Forming compound nouns denoting specific deficiencies of sight.");
        o_suf.push("opsy~1. (medicine) Examination.");
        o_suf.push("or~1. Creates an agent noun, indicating a person who does something.\n\n2. (electrical science) Appended to the names of members of classes of components, especially those that have an extensive property name of the same root suffixed with -ance.");
        o_suf.push("orama~1. Used to form, from one noun, a second meaning \"wide view of\" the first, or (with ironic reference to the preceding sense) \"surfeit of\", \"overattention to\", or \"exaggerated praise of\" the first.");
        o_suf.push("orium~1. Forming nouns denoting a place for a particular function.");
        o_suf.push("ory~1. Of or pertaining to, serving for; adjective suffix appended to various words, often nouns but also verbs, to make an adjective form. Often added to words of Latin origin, but used with other words also.\n\n2. That which pertains to, or serves for; noun suffix appended to various words");
        o_suf.push("os~1. Used to form plurals of some Hebrew and Yiddish loanwords, usually ending in -a or -ah.");
        o_suf.push("ose~1. Full of, like.\n\n2. (chemistry) Used to form the names of sugars.");
        o_suf.push("osin~1. An alpha-1 adrenergic receptor antagonist.");
        o_suf.push("osis~1. (pathology) Functional disease or condition such as hepatosis.\n\n2. Process, action.\n\n3. Formation, increase.");
        o_suf.push("osity~1. Forming nouns, usually abstract, and usually from adjectives in -ous or -ose.\n\n2. (colloquial) Forming nouns from other adjectives for humorous effect.");
        o_suf.push("ostomy~1. Alternative form of -stomy: a surgical procedure forming a hole for access, nutrition, or waste elimination.");
        o_suf.push("oth~1. Used to form plurals of some Hebrew loanwords ending in -a or -ah.");
        o_suf.push("otic~1. (pathology) Having disease or abnormal condition.\n\n2. Pertaining to a process or action.");
        o_suf.push("otomy~1. Alternative form of -tomy: Cutting, incision, section; (anatomy) a divison, or (surgery) a surgical incision.");
        o_suf.push("ous~1. Used to form adjectives from nouns, to denote possession or presence of a quality in any degree, commonly in abundance.\n\n2. (chemistry) Used in chemical nomenclature to name chemical compounds in which a specified chemical element has a lower oxidation number than in the equivalent compound whose name ends in the suffix -ic.");
        o_suf.push("ov~1. A romanization of the Russian possessive suffix -ов (-ov).");
        o_suf.push("oxy~1. (organic chemistry) A ether functional group, consisting of a carbon chain with an intervening oxygen atom at the attachment point.");
        o_suf.push("oyl~1. (chemistry) Forming the names of acyl radicals from the names of corresponding carboxylic acids.");
    break;
    case 15:
        p_suf.push("pants~1. (informal, usually derogatory) Used with adjectives ending in -y to form nicknames based on a negative quality of a person.");
        p_suf.push("parous~1. parous; relating to parity (the number of times a woman has given birth).\n\n2. Causing or producing (the thing indicated by the stem to which the suffix is attached).");
        p_suf.push("partite~1. (forming adjectives) Having the specified number of parts.");
        p_suf.push("path~1. Used to form nouns indicating someone with a particular disorder.\n\n2. Used to form nouns indicating someone with a particular capability, as a type of remedial treatment.");
        p_suf.push("pathic~1. Adjectival form of suffix -pathy:\n\na. Suffering, feeling.\n\nb. Damage to, disease of, or abnormality.\n\nc. Therapy.");
        p_suf.push("pathy~1. suffering, feeling.\n\n2. Damage to, disease of, or abnormality.\n\n3. Therapy.");
        p_suf.push("pause~1. Indicative of a pause or discontinuance.");
        p_suf.push("ped~1. Foot.");
        p_suf.push("pedia~1. Relating to learning.\n\n2. (from a back-formation of encyclopedia) A specialized encyclopedia about the prefix (e.g., \"Investopedia\") or a general encyclopedia in the structure of the prefix.");
        p_suf.push("penia~1. Deficiency.");
        p_suf.push("people~1. Plural of -person.");
        p_suf.push("person~1. Someone who is an expert in an area.\n\n2. Someone who is employed or holds a position in an area.\n\n3. Someone who has special characteristics relating to a topic or area.\n\n4. (nonstandard) In certain cases, someone who derives from a particular nationality. (More often, the separate noun \"person\" is used, e.g. \"Norse person\".)");
        p_suf.push("petal~1. Travelling towards.");
        p_suf.push("pexy~1. Fixing (in place), fastening.");
        p_suf.push("phage~1. Something that eats, or consumes.");
        p_suf.push("phagic~1. Used to form adjectives from prefixes, to denote diet types.");
        p_suf.push("phagous~1. Used to form adjectives meaning \"eating\" or \"feeding on\".");
        p_suf.push("phagy~1. (forming nouns) Feeding on; consumption of.\n\n2. (forming nouns) Eating in a specified manner, normal or abnormal.");
        p_suf.push("phasia~1. Used to form the names of disorders and phenomena relating to words and speech.");
        p_suf.push("phil~1. Alternative spelling of -phile: Forming nouns and adjectives meaning \"loving\", \"friendly\", or \"friend\".");
        p_suf.push("phile~1. Forming nouns and adjectives meaning \"loving\", \"friendly\", or \"friend\".");
        p_suf.push("philia~1. Used to form nouns meaning liking, love (for something).\n\n2. (pathology) Used to form nouns meaning abnormal liking or tendency (for something), e.g. paraphilia.");
        p_suf.push("philiac~1. Someone with tendency towards something, or an abnormal attraction to something.");
        p_suf.push("philic~1. Synonym of -philous: having an affinity, attraction, preference or love of something.");
        p_suf.push("philous~1. Having an affinity, attraction, preference or love of something.");
        p_suf.push("phily~1. Liking for.");
        p_suf.push("phobe~1. Used to form nouns denoting a person having a fear of a specific thing.\n\n2. Used to form nouns denoting a person who hates or dislikes a type of person, thing, etc.");
        p_suf.push("phobia~1. Used to form nouns meaning fear of a specific thing.\n\n2. (analogy) Used to form nouns meaning hate, dislike, or repression of a specific thing.");
        p_suf.push("phobic~1. Used to form adjectives indicating a fear of a specific thing.\n\n2. Used to form adjectives indicating a dislike or aversion.\n\n3. Used as a synonym of -phobe to form nouns.");
        p_suf.push("phone~1. A type of sound.\n\n2. A device that makes a sound.\n\n3. A device related to the telephone.\n\n4. A speaker of a certain language.");
        p_suf.push("phonic~1. Forms adjectives relating to sound.");
        p_suf.push("phony~1. Forms nouns related to sound or musical structure.");
        p_suf.push("phor~1. Alternative spelling of -phore (carrier).");
        p_suf.push("phore~1. Bearer, carrier or conveyor.");
        p_suf.push("phoresis~1. Denoting movement of particles by a force.");
        p_suf.push("phrenia~1. Mental disorder.");
        p_suf.push("phyl~1. Alternative form of -phyll (leaf).");
        p_suf.push("phyll~1. Leaf.");
        p_suf.push("phyllous~1. (of plants) Having a number or kind of leaves as specified by the first element.\n\n2. (of plant parts) Having a relationship to the leaves as specified by the first element.");
        p_suf.push("physis~1. Growth or growing.\n\n2. Form or structure.");
        p_suf.push("phyte~1. A taxonomic group of plants or algae, e.g. arthrophyte, cyanophyte.\n\n2. A plant that grows in a specified habitat, e.g. acrophyte.\n\n3. A plant that grows in a specified form or habit, e.g. anthophyte, macrophyte.\n\n4. A pathological growth, e.g. osteophyte.");
        p_suf.push("plasia~1. (medicine) Growth or formation.");
        p_suf.push("plast~1. A small body, structure, particle, or granule, especially of living matter.\n\n2. A plastid.");
        p_suf.push("plasty~1. (medicine) Repair or restoration of a part or function.\n\n2. Molding or shaping through a surgical procedure.");
        p_suf.push("ple~1. (as a noun) A tuple containing the specified number of terms.\n\n2. (as an adjective) Containing the specified number of terms.");
        p_suf.push("plegia~1. Paralysis.");
        p_suf.push("plegic~1. Adjectives derived from the related -plegia (paralysis).");
        p_suf.push("plex~1. Comprising a number of parts, as in duplex.\n\n2. (mathematics) ten to the power of the number, as in googolplex.");
        p_suf.push("plinerved~1. (botany, of leaves) Indicating that the main nerves are lateral and arise from a point distinctly above the base of the leaf. Combined with a numerical prefix: 3-plinerved, 5-plinerved, etc.");
        p_suf.push("ploid~1. (biology, genetics) Indicating the number of homologous sets of chromosomes in a cell.");
        p_suf.push("pnea~1. (physiology) Breathing, respiration.");
        p_suf.push("pnoea~1. (Britain) Alternative spelling of -pnea: (physiology) breathing, respiration.");
        p_suf.push("pocalypse~1. Denoting a catastrophic event caused by or related to the stem word.");
        p_suf.push("pod~1. Related to or resembling a foot or similar limb.");
        p_suf.push("poeia~1. Used to form nouns that denote the making or creating of something.");
        p_suf.push("pœia~1. Obsolete spelling of -poeia.");
        p_suf.push("poiesis~1. Production, creation or formation.");
        p_suf.push("polis~1. City.");
        p_suf.push("polises~1. plural of -polis (city).");
        p_suf.push("poly~1. (economics) Pertaining to the number of sellers in a market.\n\n2. Pertaining to a derivative of the board game Monopoly.");
        p_suf.push("poo~1. Added to nouns, especially personal names, ending in -y or -ie to form affectionate, playful diminutives.");
        p_suf.push("prazole~1. (pharmacology) Used to form names of generic proton pump inhibitor drugs.");
        p_suf.push("preneur~1. (business) Entrepreneur.");
        p_suf.push("proof~1. Used to form adjectives denoting an impervious or impenetrable quality.");
        p_suf.push("pter~1. Wing.");
        p_suf.push("pteran~1. Alternative form of -pterous: having wings (of a specified size, type or number).");
        p_suf.push("pterous~1. Having wings (of a specified size, type or number).");
        p_suf.push("ptile~1. (botany, forming adjectives and nouns) type of leaf.\n\n2. (ornithology, forming nouns) Type of plumage.");
        p_suf.push("punk~1. Denotes a futuristic, aesthetically-oriented genre of fiction based on the noun to which it is suffixed, usually involving ahistorical or anachronistic technology and its effects on society.");
    break;
    case 16:
        r_suf.push("R Us~1. (humorous) Suggesting a group of people or repository of products of the specified kind.");
        r_suf.push("rama~1. Alteration of -orama (Used to form, from one noun, a second meaning \"wide view of\" the first, or (with ironic reference to the preceding sense) \"surfeit of\", \"overattention to\", or \"exaggerated praise of\" the first), used in suffixing a word ending with an r or vowel sound.");
        r_suf.push("rd~1. Marks ordinals written in digits when the final term of the spelled number is \"third\".");
        r_suf.push("rds~1. Marks ordinals written in digits when the final term of the spelled number is \"thirds\".");
        r_suf.push("red~1. (no longer productive) A suffix forming nouns of condition or state.");
        r_suf.push("rel~1. Pejorative suffix, as in wastrel.\n\n2. Diminutive suffix, as in cockerel.");
        r_suf.push("ren~1. (chiefly non-standard, humorous) Used to form the plural of nouns.");
        r_suf.push("ress~1. Forms feminine agent nouns.");
        r_suf.push("ric~1. (no longer productive) A termination denoting jurisdiction, or a district over which government is exercised.");
        r_suf.push("rices~1. plural of -rix: (dated) appended to words, chiefly verbs, to form female agent nouns.");
        r_suf.push("ridden~1. Figuratively construed as \"repeatedly subject to\" or \"unable to escape from\".");
        r_suf.push("riffic~1. Used to form intensified adjectives from nouns and adjectives.");
        r_suf.push("rific~1. Used to form intensified adjectives from nouns and adjectives.");
        r_suf.push("rix~1. (dated) Appended to words, chiefly verbs, to form female agent nouns.");
        r_suf.push("rrhagia~1. (medicine) Forms nouns indicating excessive discharge or haemorrhage from an organ.");
        r_suf.push("rrhaphy~1. (surgery) Suture.");
        r_suf.push("rrhea~1. (American spelling) Flowing.");
        r_suf.push("rrhexis~1. Rupture.\n\n2. Splitting.");
        r_suf.push("rrhoea~1. (British spelling) Alternative spelling of -rrhea: flowing.");
        r_suf.push("rrhœa~1. (British spelling) Obsolete spelling of -rrhea: flowing.");
        r_suf.push("rubicin~1. (chemistry) Used to form names of generic antineoplastic drugs.");
        r_suf.push("ry~1. Alternative form of -ery:\n\na. Added to nouns to form other nouns meaning the \"art, craft, or practice of.\"\n\nb. Added to verbs to form nouns meaning \"place of\" (an art, craft, or practice).\n\nc. Added to nouns to form other nouns meaning \"a class, group, or collection of.\"\n\nd. Added to nouns to form other nouns meaning \"behavior characteristic of.\"");
    break;
    case 17:
        s_suf.push("'s~1. (sometimes proscribed) Used to form the plurals of numerals, letters, some abbreviations and some nouns, usually because the omission of an apostrophe would make the meaning unclear or ambiguous.\n\n2. (obsolete) Used to form plurals of foreign words, to clarify pronunciation, such as \"banana\'s\" or \"pasta\'s\".\n\n3. (proscribed) Used to form the plural of nouns that correctly take just an \"s\" in the plural.");
        s_suf.push("s~1. Used to form regular plurals of nouns.\n\n2. Used to form many pluralia tantum (nouns that are almost or entirely without singular forms).\n\n3. Used to form a word referring to a specific decade in the Gregorian calendar. Appended to the first year of the decade.\n\n4. Used to form the third-person singular indicative present tense of verbs.\n\n5. Used in the formation of certain English adverbs.");
        s_suf.push("safe~1. Free from danger or problems.");
        s_suf.push("sama~1. (anime and manga fandom) Appended to a person's name or nickname to convey honour and respect.");
        s_suf.push("san~1. Honorific ending used to indicate a person is Japanese or talking with Japanese, or treated like Japanese.");
        s_suf.push("sauce~1. (slang) Used to add emphasis to adjectives, especially those that relate to cool- or uncoolness.");
        s_suf.push("saur~1. Used in the common names of extinct reptilian creatures such as dinosaurs.");
        s_suf.push("saurus~1. Forms names for real or imaginary dinosaurs.");
        s_suf.push("scape~1. Form, formation, shape.\n\n2. Scene, picture, view.\n\n3. A specific type of space.");
        s_suf.push("scope~1. Used to make terms denoting an instrument used for viewing or examination.");
        s_suf.push("scopic~1. Forming adjectives relating to observation or viewing.");
        s_suf.push("scopy~1. Observation, viewing.");
        s_suf.push("se~1. Creates denominatives from adjective or nouns.\n\n2. When attached to certain adjectives, it forms a transitive verb whose meaning is, to make (adjective).");
        s_suf.push("self~1. Used in forming intensive and reflexive forms of the singular personal pronouns.");
        s_suf.push("selves~1. Used in forming intensive and reflexive forms of the plural personal pronouns.");
        s_suf.push("sexual~1. Forms a noun or adjective describing a state or style of sexuality.");
        s_suf.push("ship~1. Appended to a noun to form a new noun denoting a property or state of being, time spent in a role, or a specialised union.");
        s_suf.push("shire~1. A combining form used in the names of British counties.");
        s_suf.push("sicle~1. (informal) A suffix combined with a noun to indicate something cold or frozen.");
        s_suf.push("side~1. Forms adjectives describing position next to or alongside an object.\n\n2. Forms adjectives and adverbs describing position in relation to a dividing line or other separation.\n\n3. Forms nouns describing the area alongside or around an object.\n\n4. (chiefly Britain) Forms proper nouns naming the conurbation around a river.");
        s_suf.push("sie~1. Alternative form of -sies: a diminutive modifier used to add an element of childishness, informality, or levity to a word.");
        s_suf.push("sies~1. A diminutive modifier used to add an element of childishness, informality, or levity to a word.");
        s_suf.push("sion~1. Variant of -tion (Used to form nouns meaning \"the action of (a verb)\" or \"the result of (a verb)\".), most common in words inherited directly from Latin with an accusative singular ending in -sionem.");
        s_suf.push("sis~1. Forming nouns of action or process.\n\n2. (medicine) Forming nouns of condition.");
        s_suf.push("ski~1. (informal, humorous) Added to a word, name, or phrase to invoke Russianness, Polishness, or a more general Slavicness.");
        s_suf.push("sky~1. Alternative spelling of -ski: (informal, humorous) added to a word, name, or phrase to invoke Russianness, Polishness, or a more general Slavicness.");
        s_suf.push("soft~1. Used in the names of software houses.");
        s_suf.push("sol~1. (soil science) Forming the names of different kinds of soil.");
        s_suf.push("some~1. (forms adjectives from nouns or adjectives) Characterized by some specific condition or quality, usually to a considerable degree.\n\n2. (noun combining form) Body.\n\n3. (noun combining form) Chromosome.");
        s_suf.push("something~1. Indicating approximation, as in a range of numbers.");
        s_suf.push("son~1. Added to a stem (usually a given name or surname) to form a patronymic or matronymic surname.");
        s_suf.push("sona~1. (fandom slang) (added to a noun denoting a species) A character of the given species, used to represent oneself online or in role-playing.");
        s_suf.push("sophy~1. Wisdom, knowledge, learning.");
        s_suf.push("speak~1. Indicates a manner of speech or writing typical of or characterized by the root term.");
        s_suf.push("spect~1. To look at, perceive, or observe.");
        s_suf.push("sphere~1. (mathematics) Used to form nouns indicating a sphere of x dimensions.\n\n2. Designating a spherical field or object.\n\n3. Designating a global system or layer of the Earth or another planet.\n\n4. (figuratively) Designating a particular realm or interest of a group of people, object, etc.; its spatial or virtual sphere of influence.");
        s_suf.push("splain~1. (slang) A suffix combined with a descriptive adjective or noun to create a verb meaning someone who fits that description condescendingly explaining something to someone who does not fit that description (especially, something the listener has more experience of).");
        s_suf.push("sploitation~1. E of a specific demographic, person, or thing, particularly in media.");
        s_suf.push("sson~1. Alternative form of -son: added to a stem (usually a given name or surname) to form a patronymic or matronymic surname.");
        s_suf.push("st~1. Marks ordinals written in digits when the final term of the spelled number is \"first\".\n\n2. Excrescent suffix (adding sound but largely not changing the meaning).");
        s_suf.push("stan~1. Home of; place where one stays; used especially in place names.");
        s_suf.push("stasis~1. (physiology) Slowing down, stopping.");
        s_suf.push("stat~1. Forming nouns naming scientific instruments that act to render the prefixed element stationary or static in some respect.");
        s_suf.push("static~1. Used in adjectives relating to nouns with the suffix -stasis: (physiology) slowing down, stopping.");
        s_suf.push("statin~1. Used to form the names of statin drugs.");
        s_suf.push("ster~1. Someone who is, or who is associated with, or who does something specified.\n\n2. (humorous, sometimes offensive) A diminutive appended to a person's name.");
        s_suf.push("stock~1. Forming the names of theme-based festivals or concerts.");
        s_suf.push("stome~1. Mouth or mouth-like opening.");
        s_suf.push("strophy~1. Used to form nouns indicating a turn or twist of the indicated kind.");
        s_suf.push("style~1. Column(s); forming adjectives.");
        s_suf.push("styly~1. Pertaining to styles.");
    break;
    case 18:
        t_suf.push("t~1. An excrescent ending appended to words suffixed with -s.\n\n2. An excrescent ending appended to words suffixed with -s.\n\n3. (no longer productive) Alternative form of -th.\n\n4. Verbs formed from nouns or adjectives (compare English -ate, -ize), frequently having a causative force, or modified from an existing verb into a frequentative verb (no longer productive).");
        t_suf.push("tacular~1. (slang) Used to form adjectives denoting (often ironically) some type of exceptionality.");
        t_suf.push("tainment~1. Denoting material created in part to entertain, while also serving another purpose.");
        t_suf.push("tard~1. (slang, derogatory) Used to form words conveying an attitude of contempt or doubt over the subject's intelligence.\n\n2. (slang, derogatory) A thing associated with persons of low intelligence.");
        t_suf.push("tardy~1. (slang, derogatory) Used to form words conveying an attitude of contempt or doubt over the subject's intelligence.\n\n2. (rare) To be or make slow, slower or delayed.");
        t_suf.push("tastic~1. (slang) Fantastic; used to form adjectives conveying praise or celebration, sometimes sarcastically.");
        t_suf.push("teen~1. Used to form cardinal numbers from thirteen to nineteen.");
        t_suf.push("tene~1. (biology) Ribbon-like structure; Used to form words relating the structure of chromosomes in meiosis.");
        t_suf.push("terol~1. (chemistry) A suffix for several beta-2 adrenergic receptor agonists.");
        t_suf.push("th~1. (no longer productive) Used to form nouns from verbs of action or nouns from adjectives.\n\n2. Used to form the ordinal numeral when the final term of the spelled number is not \"first\", \"second\", or \"third\".\n\n3. (mathematics) Used to form a term denoting the ordinal numeral corresponding to the value, being a natural number, of a mathematical expression.");
        t_suf.push("therm~1. (biology) Used to name types of animal having a specified form of body temperature mechanism.\n\n2. Heat.");
        t_suf.push("thermal~1. Relating to heat or temperatures.");
        t_suf.push("thermic~1. Relating to heat or temperatures.");
        t_suf.push("thermy~1. Heat.");
        t_suf.push("thon~1. Alternate form of -athon: a greatly extended period of any activity, usually for the purpose of fundraising.");
        t_suf.push("tide~1. Time; added to a festival name to indicate the period around that festival.");
        t_suf.push("time~1. Suffix used to indicate how many times something has occurred.");
        t_suf.push("tinib~1. (pharmacology) Tyrosine kinase inhibitor.");
        t_suf.push("tion~1. (non-productive) Used to form nouns meaning \"the action of (a verb)\" or \"the result of (a verb)\". Words ending in this suffix are almost always derived from a similar Latin word; a few (e.g. gumption) are not derived from Latin and are unrelated to any verb.");
        t_suf.push("to-be~1. Future, later, expectant.");
        t_suf.push("tome~1. An instrument for cutting.\n\n2. A section or segment.");
        t_suf.push("tomy~1. Cutting, incision, section; (anatomy) a divison, or (surgery) a surgical incision.");
        t_suf.push("ton~1. Place-name suffix, originally denoting a town or enclosure of buildings.\n\n2. (mathematics, bridge) A set of specific objects or persons.");
        t_suf.push("tope~1. Place, area or region.");
        t_suf.push("topia~1. Paradise.\n\n2. (by extension) Any geographic region.");
        t_suf.push("topic~1. Place.");
        t_suf.push("topy~1. A suffix meaning place, position, or localized.");
        t_suf.push("tort~1. To make something change its shape.");
        t_suf.push("treme~1. Having a trema (hole or aperture) or tremata of the type, position or number specified by the prefix.");
        t_suf.push("tron~1. Used to name various electronic devices.\n\n2. Used to name a number of elementary particles.\n\n3. Used to name a number of particle accelerators.\n\n4. Used to name a number of machine learning algorithms.");
        t_suf.push("trope~1. (sciences) Something that turns, affects, changes, responds, moves.");
        t_suf.push("troph~1. Forming nouns denoting members of classes of organisms distinguished by trophic modes.");
        t_suf.push("trophic~1. Used to form adjectives corresponding to nouns ending in -trophy (nutrition or growth, devlopment).");
        t_suf.push("trophy~1. Nutrition.\n\n2. Growth, development.");
        t_suf.push("tropic~1. (sciences) Turning or changing.\n\n2. (sciences) Affecting or attracted to the thing specified.");
        t_suf.push("tropism~1. (sciences) Movement, turning.\n\n2. (biology) Growth towards.");
        t_suf.push("tropy~1. (sciences) Exhibiting a behavior.\n\n2. (sciences) Turning, affecting, change, response, movement.");
        t_suf.push("tude~1. Alternative form of -itude (state of).");
        t_suf.push("tuple~1. (mathematics) A tuple containing the specified number of terms.");
        t_suf.push("ty~1. Nonproductive suffix indicating single-digit integer multiples of ten.\n\n2. Alternative form of -ity Used to form abstract nouns from adjectives.");
        t_suf.push("type~1. Impressed form; stamp; print.\n\n2. Typical form.\n\n3. (biology) Used to form words referring to groups of organisms characterized by the presence of a specific feature.\n\n4. -Like: Having some of the characteristics of (used to form adjectives from nouns).");
    break;
    case 19:
        u_suf.push("ual~1. Alternative form of -al:\n\na. Of or pertaining to. Adjectival suffix appended to various words, often nouns, to make an adjective form.\n\nb. Forming nouns, especially of verbal action.\n\nc. (organic chemistry) Forms the names of aldehydes.");
        u_suf.push("uide~1. An anion formally derived by adding a hydride ion to a parent hydride.");
        u_suf.push("ule~1. (rare, sciences) Diminutive suffix.");
        u_suf.push("um~1. Denotes singular grammatical number.\n\n2. (chemistry) Forms the ends of the names of certain elements (such as molybdenum and platinum).\n\n3. Denotes transitive verbs in the trade pidgins used between English-speakers and indigenous populations; used derogatorily by extension in English by addition to any verb, transitive or not.");
        u_suf.push("uous~1. Alternative form of -eous:\n\na. Used with nouns to form adjectives with the sense of resembling to or having the characteristics of the suffixed term; similar to -ous.\n\nb. Used to form adjectives meaning resembling or having characteristics of the related term.\n\n2. Alternative of -ous:\n\na. Used to form adjectives from nouns, to denote possession or presence of a quality in any degree, commonly in abundance.\n\nb. (chemistry) Used in chemical nomenclature to name chemical compounds in which a specified chemical element has a lower oxidation number than in the equivalent compound whose name ends in the suffix -ic.");
        u_suf.push("ure~1. (non-productive) A process; a condition; a result of an action.\n\n2. (non-productive) An official entity or function.");
        u_suf.push("uret~1. (chemistry, obsolete) -ide:\n\na. Any of a group of related compounds - azide, polysaccharide, glycoside.\n\nb. A binary compound - bromide, arsenide, palladide.\n\nc. Any of a group of several elements - lanthanide.");
        u_suf.push("uretic~1. Urine.");
        u_suf.push("urgy~1. Technique for working with something.");
        u_suf.push("uria~1. (pathology) Relating to urine.");
    break;
    case 20:
        v_suf.push("vac~1. (obsolete, marketing, science fiction, computing, mid-20th century) Used in the naming of computer systems and computer models, due to the use of vacuum tubes as the functional elements of computers of the time.\n\n2. (marketing) Used in the naming of vacuum cleaner models.");
        v_suf.push("valent~1. Having one or more valences.");
        v_suf.push("verse~1. Forming compound nouns denoting the whole range or totality of what is indicated by the first element.\n\n2. Forming compounds nouns denoting the fictional world of a given character, television series etc.");
        v_suf.push("ville~1. Used to form a name of an inhabited place, a town or city.\n\n2. (figuratively) Used with an adj. as a mildly intensifying locative, indicating a region of such things.");
        v_suf.push("vir~1. (chemistry) Used to form names of generic drugs used against viruses.");
        v_suf.push("vore~1. An organism, usually animal, identified by its kind of diet.");
        v_suf.push("vorous~1. forming adjectives with the sense of \'habitually eating, feeding on.\'");
        v_suf.push("vudine~1. (chemistry) Used to form names of generic drugs used against viruses.");
    break;
    case 21:
        w_suf.push("wad~1. (slang) Added to a variety of vulgar term and insults for an obnoxious person to create new insults.");
        w_suf.push("ward~1. Forming adverbs denoting course or direction to, or motion or tendency toward, as in \"backward\", \"toward\", \"forward\", etc.");
        w_suf.push("wards~1. Forming adjectives and adverbs denoting course or direction to, or motion or tendency toward, as in \"backwards\", \"towards\", etc.");
        w_suf.push("ware~1. Used to form nouns denoting, collectively, items made from a particular substance.\n\n2. Used to form nouns denoting, collectively, items of a particular kind or for a particular use.\n\n3. Used to form mass nouns denoting specific classes of computer software, based on use, function, or method of distribution.");
        w_suf.push("wash~1. (informal) An overwhelming victory by a team or entity of the colour specified; often a clean sweep.");
        w_suf.push("wave~1. Applied to various (often very specialised) music genres, subcultures and aesthetics.");
        w_suf.push("way~1. Used in the game of Pig Latin.");
        w_suf.push("ways~1. Towards, in the direction towards.\n\n2. In the orientation of.");
        w_suf.push("wear~1. Used to form nouns denoting clothing, ranging from clothes worn by a particular sex to clothes made a particular way or of a certain kind.");
        w_suf.push("wich~1. (in placenames) Village; settlement; hamlet; trading centre.\n\n2. (in placenames) Brine spring; well.\n\n3. (cooking) Sandwich.");
        w_suf.push("wick~1. Alternative form of -wich:  (in placenames) village; settlement; hamlet; trading centre.");
        w_suf.push("wide~1. Throughout the specified area.");
        w_suf.push("wise~1. In the direction or orientation of.\n\n2. In the manner of.\n\n3. In the matter of, with regard to.\n\n4. One (thing) at a time.");
        w_suf.push("woman~1. A woman who is an expert in an area.\n\n2. A woman who is employed or holds a position in an area.\n\n3. A woman who has special characteristics relating to a topic or area.\n\n4. In certain cases, a woman who derives from a particular nationality.");
        w_suf.push("women~1. Plural of -woman.");
        w_suf.push("work~1. Denoting a craft involving a particular material or tool.\n\n2. Denoting a structure or work of art crafted chiefly from a given material.\n\n3. Denoting the structure or mechanism of a given object.");
        w_suf.push("worth~1. Denotes a quantity corresponding to the time, value or dimension of the suffixed term.");
        w_suf.push("worthy~1. Of sufficient worth for; deserving of.\n\n2. Suitable or safe for; capable of enduring or able to bear; able to withstand.\n\n3. Able to be; fit to be; -able.\n\n4. Having the right, power, permission, or freedom to.");
    break;
    case 22:
        x_suf.push("x~1. Used to represent a value that may vary.\n\n2. (slang) Used to replace a -ks- sound, such as in hax (\"hacks\").\n\n3. An abbreviation marker.");
        x_suf.push("xeny~1. Guest, stranger, host.");
        x_suf.push("xor~1. (Internet slang) used in respelling words ending in -cker or -ker.");
    break;
    case 23:
        y_suf.push("y~1. Added to nouns and adjectives to form adjectives meaning \"having the quality of\".\n\n2. Added to verbs to form adjectives meaning \"inclined to\".\n\n3. Forming diminutive nouns.\n\n4. Forming familiar names, pet names, nicknames and terms of endearment.\n\n5. Forming abstract nouns denoting a state, condition, or quality.\n\n6. Used in the name of some locations which end in -ia in Latin.");
        y_suf.push("yer~1. (rare, usually no longer productive) Agent suffix, equivalent to -er, appended to some nouns (especially those ending in the letter \"w\" or \"v\").");
        y_suf.push("yl~1. (organic chemistry) A univalent radical or functional group formed from a given molecule. Thus propyl from propane, benzyl from benzene, and so forth.");
        y_suf.push("ylene~1. (organic chemistry) Used to form the names of bivalent radicals.");
        y_suf.push("ylidene~1. (organic chemistry) Forms the names of divalent radicals or groups connected through a carbon double bond.");
        y_suf.push("yne~1. (organic chemistry) An unsaturated hydrocarbon having at least one triple bond; an alkyne.");
    break;
    case 24:
        z_suf.push("z~1. (urban slang) Used as a substitute for -s in marking the plural of nouns. Usually used in words in which the -s suffix is actually pronounced \"z\".\n\n2. (urban slang) Used as a substitute for -s in marking verb inflections.");
        z_suf.push("zilla~1. (informal, humorous) Forms nouns and names suggesting a monster or a thing of extremely large size or great destructiveness, or other characteristics of the fictional Godzilla.");
        z_suf.push("zoan~1. (zoology) Used to categorise animals based on their evolutionary origin, life history, growth-form or ecological preferences.");
        z_suf.push("zoic~1. Relating to some specified form of animal existence.\n\n2. Relating to some specified geologic period.");
        z_suf.push("zoon~1. (zoology) Forming nouns indicating individual members of taxonomic groups whose names end in -zoa.\n\n2. (zoology) Forming nouns indicating organisms have a particular specified way of life.");
        z_suf.push("zygous~1. (biology) Having or originating from a specified state as a result of conditions in the zygote stage of development.\n\n2. (genetics) Having a specified state of allele pairs in the nucleus.\n\n3. (anatomy) Having a specified state of physical pairing of structures.");
        z_suf.push("zza~1. (Australia and Britain) Forms nicknames, especially of personal names.");
    break;
    }
}
