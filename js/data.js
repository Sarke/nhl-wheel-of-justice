var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var sHP = 'Hockey Play', sF = 'Paltry Fine', sS = 'Season', sL = 'Lifetime';
var s1 = '1 Game', s2 = '2 Games', s3 = '3 Games', s4 = '4 Games',
    s5 = '5 Games',s6 = '6 Games',s7 = '7 Games',s8 = '8 Games',s9 = '9 Games';
var _options = [s1,s2,s3,s4,s5,s6,s7,sHP,sF,sS];

var players, aM = [], aR = [];
aM[1] = [];
aM[2] = [];
aM[3] = [];
aM[5] = [];
aM[6] = [];
aM[7] = [];
aM[8] = [];

aM[1][1] = 1;
aM[2][1] = 4;
aM[3][1] = 8;
aM[5][1] = 50;
aM[6][1] = 60;
aM[7][1] = 1;
aM[8][1] = 80;
aM[1][2] = 2;
aM[2][2] = 5;
aM[3][2] = 9;
aM[5][2] = 52;
aM[6][2] = 61;
aM[7][2] = 2;
aM[8][2] = 80;
aM[1][3] = 3;
aM[2][3] = 6;
aM[3][3] = 7;
aM[5][3] = 51;
aM[6][3] = 61;
aM[7][3] = 3;
aM[8][3] = 80;
aM[1][5] = 53;
aM[2][5] = 54;
aM[3][5] = 55;
aM[5][5] = 10;
aM[6][5] = 61;
aM[7][5] = 54;
aM[8][5] = 80;
aM[1][6] = 2;
aM[2][6] = 5;
aM[3][6] = 9;
aM[5][6] = 52;
aM[6][6] = 10;
aM[7][6] = 2;
aM[8][6] = 80;
aM[1][7] = 70;
aM[2][7] = 70;
aM[3][7] = 70;
aM[5][7] = 52;
aM[6][7] = 70;
aM[7][7] = 10;
aM[8][7] = 80;
aM[1][8] = 2;
aM[2][8] = 5;
aM[3][8] = 9;
aM[5][8] = 52;
aM[6][8] = 61;
aM[7][8] = 2;
aM[8][8] = 80;


aR[1] = [];
aR[2] = [];
aR[3] = [];
aR[4] = [];
aR[5] = [];
aR[6] = [];
aR[7] = [];
aR[8] = [];
aR[9] = [];
aR[10] = [];
aR[50] = [];
aR[51] = [];
aR[52] = [];
aR[53] = [];
aR[54] = [];
aR[55] = [];
aR[60] = [];
aR[61] = [];
aR[70] = [];
aR[80] = [];

aR[1][1] = 1;
aR[2][1] = 2;
aR[3][1] = 1;
aR[4][1] = 5;
aR[5][1] = 4;
aR[6][1] = 3;
aR[7][1] = 4;
aR[8][1] = 6;
aR[9][1] = 6;
aR[10][1] = 6;
aR[50][1] = 2;
aR[51][1] = 1;
aR[52][1] = 2;
aR[53][1] = 3;
aR[54][1] = 7;
aR[55][1] = 8;
aR[60][1] = 3;
aR[61][1] = 2;
aR[70][1] = 1;
aR[80][1] = 8;
aR[1][2] = 1;
aR[2][2] = 1;
aR[3][2] = 1;
aR[4][2] = 4;
aR[5][2] = 4;
aR[6][2] = 2;
aR[7][2] = 4;
aR[8][2] = 6;
aR[9][2] = 5;
aR[10][2] = 6;
aR[50][2] = 2;
aR[51][2] = 1;
aR[52][2] = 1;
aR[53][2] = 2;
aR[54][2] = 7;
aR[55][2] = 8;
aR[60][2] = 2;
aR[61][2] = 1;
aR[70][2] = 1;
aR[80][2] = 8;
aR[1][3] = 1;
aR[2][3] = 1;
aR[3][3] = 1;
aR[4][3] = 3;
aR[5][3] = 3;
aR[6][3] = 2;
aR[7][3] = 3;
aR[8][3] = 6;
aR[9][3] = 5;
aR[10][3] = 6;
aR[50][3] = 2;
aR[51][3] = 1;
aR[52][3] = 1;
aR[53][3] = 2;
aR[54][3] = 7;
aR[55][3] = 8;
aR[60][3] = 1;
aR[61][3] = 1;
aR[70][3] = 1;
aR[80][3] = 8;
aR[1][4] = 1;
aR[2][4] = 1;
aR[3][4] = 1;
aR[4][4] = 6;
aR[5][4] = 5;
aR[6][4] = 3;
aR[7][4] = 5;
aR[8][4] = 7;
aR[9][4] = 7;
aR[10][4] = 6;
aR[50][4] = 2;
aR[51][4] = 1;
aR[52][4] = 2;
aR[53][4] = 3;
aR[54][4] = 7;
aR[55][4] = 8;
aR[60][4] = 3;
aR[61][4] = 2;
aR[70][4] = 1;
aR[80][4] = 8;

players = {
"Aaron Rome":2,
"Adam Burish":2,
"Adam Cracknell":2,
"Adam Foote":2,
"Adam Hall":2,
"Adam Mair":2,
"Adam McQuaid":3,
"Adam Pardy":2,
"Adrian Aucoin":2,
"Al Montoya":2,
"Alec Martinez":2,
"Aleksandr Burmistrov":2,
"Ales Hemsky":2,
"Alex Auld":2,
"Alex Goligoski":2,
"Alex Pietrangelo":2,
"Alex Plante":2,
"Alex Tanguay":2,
"Alexander Edler":2,
"Alexander Frolov":2,
"Alexander Ovechkin":1,
"Alexander Semin":1,
"Alexander Steen":2,
"Alexander Sulzer":2,
"Alexandre Burrows":2,
"Alexandre Giroux":2,
"Alexandre R. Picard":2,
"Alexei Kovalev":2,
"Alexei Ponikarovsky":2,
"Anders Lindback":2,
"Andreas Lilja":2,
"Andreas Nodl":2,
"Andrei Kostitsyn":2,
"Andrei Markov":2,
"Andrej Meszaros":2,
"Andrej Sekera":2,
"Andrew Alberts":2,
"Andrew Brunette":2,
"Andrew Cogliano":2,
"Andrew Desjardins":2,
"Andrew Ebbett":2,
"Andrew Ference":1,
"Andrew Ladd":2,
"Andrew MacDonald":2,
"Andrew Murray":2,
"Andrew Raycroft":2,
"Andy Greene":2,
"Andy McDonald":2,
"Andy Sutton":3,
"Anssi Salmela":2,
"Antero Niittymaki":2,
"Anthony Stewart":2,
"Antoine Vermette":2,
"Anton Babchuk":2,
"Anton Stralman":2,
"Anton Volchenkov":2,
"Antti Miettinen":2,
"Antti Niemi":2,
"Anze Kopitar":1,
"Arron Asham":3,
"Artem Anisimov":2,
"B.J. Crombeen":3,
"Barret Jackman":2,
"Ben Eager":2,
"Ben Lovejoy":2,
"Benoit Pouliot":2,
"Bill Thomas":2,
"Blair Betts":2,
"Blair Jones":2,
"Blake Comeau":2,
"Blake Geoffrion":2,
"Blake Wheeler":2,
"Bobby Butler":2,
"Bobby Ryan":1,
"Boyd Gordon":2,
"Brad Boyes":2,
"Brad Marchand":1,
"Brad Richards":1,
"Brad Richardson":2,
"Brad Staubitz":3,
"Brad Stuart":2,
"Brad Winchester":2,
"Braden Holtby":2,
"Brandon Dubinsky":2,
"Brandon McMillan":2,
"Brandon Prust":3,
"Brandon Sutter":2,
"Brandon Yip":2,
"Braydon Coburn":2,
"Brendan Mikkelson":2,
"Brendan Morrison":2,
"Brenden Morrow":2,
"Brent Burns":2,
"Brent Johnson":2,
"Brent Seabrook":2,
"Brent Sopel":2,
"Brett Carson":2,
"Brett Clark":2,
"Brett Lebda":2,
"Brett MacLean":2,
"Brian Boucher":2,
"Brian Boyle":2,
"Brian Campbell":2,
"Brian Elliott":2,
"Brian Gionta":2,
"Brian Lee":2,
"Brian Rafalski":2,
"Brian Rolston":2,
"Brian Sutherby":2,
"Brooks Laich":2,
"Brooks Orpik":2,
"Bruno Gervais":2,
"Bryan Allen":2,
"Bryan Bickell":2,
"Bryan Little":2,
"Bryan McCabe":2,
"Bryce Salvador":2,
"Byron Bitz":2,
"Cal Clutterbuck":2,
"Cal O'Reilly":2,
"Cam Barker":2,
"Cam Fowler":2,
"Cam Janssen":3,
"Cam Ward":2,
"Carey Price":1,
"Carl Gunnarsson":2,
"Carl Hagelin":2,
"Carlo Colaiacovo":2,
"Chad Johnson":2,
"Chad LaRose":2,
"Chris Butler":2,
"Chris Campoli":2,
"Chris Clark":2,
"Chris Conner":2,
"Chris Drury":2,
"Chris Kelly":1,
"Chris Kunitz":2,
"Chris Mason":2,
"Chris Neil":3,
"Chris Osgood":2,
"Chris Phillips":2,
"Chris Porter":2,
"Chris Pronger":3,
"Chris Stewart":2,
"Chris Thorburn":2,
"Christian Ehrhoff":2,
"Christopher Higgins":2,
"Christopher Tanev":2,
"Chuck Kobasew":2,
"Clarke MacArthur":2,
"Claude Giroux":1,
"Clay Wilson":2,
"Clayton Stoner":2,
"Cody Franson":2,
"Cody McCormick":3,
"Cody McLeod":3,
"Colby Armstrong":2,
"Colin Fraser":2,
"Colin Greening":2,
"Colin White":2,
"Colin Wilson":2,
"Colton Orr":3,
"Corey Crawford":2,
"Corey Perry":1,
"Cory Sarich":2,
"Cory Schneider":2,
"Cory Stillman":2,
"Craig Adams":2,
"Craig Anderson":2,
"Craig Rivet":2,
"Curtis Glencross":2,
"Curtis McElhinney":2,
"D. J. King":2,
"Dainius Zubrus":2,
"Dan Boyle":2,
"Dan Ellis":2,
"Dan Hamhuis":2,
"Dan Sexton":2,
"Dana Tyrell":2,
"Daniel Alfredsson":1,
"Daniel Carcillo":3,
"Daniel Cleary":2,
"Daniel Girardi":2,
"Daniel Paille":1,
"Daniel Sedin":1,
"Daniel Winnik":2,
"Danny Briere":1,
"Dany Heatley":1,
"Darcy Hordichuk":3,
"Darren Helm":2,
"Darroll Powe":2,
"Darryl Boyce":2,
"Dave Bolland":2,
"David Backes":2,
"David Booth":1,
"David Clarkson":3,
"David Desharnais":2,
"David Jones":2,
"David Koci":2,
"David Krejci":1,
"David Legwand":2,
"David Moss":2,
"David Perron":2,
"David Schlemko":2,
"David Steckel":2,
"Davis Drewiske":2,
"Daymond Langkow":2,
"Dennis Seidenberg":1,
"Dennis Wideman":2,
"Derek Boogaard":3,
"Derek Dorsett":3,
"Derek Joslin":2,
"Derek MacKenzie":2,
"Derek Morris":2,
"Derek Roy":1,
"Derek Smith":2,
"Derek Stepan":2,
"Derick Brassard":2,
"Deryk Engelland":3,
"Devan Dubnyk":2,
"Devin Setoguchi":2,
"Dion Phaneuf":1,
"Dmitry Kulikov":2,
"Dominic Moore":2,
"Doug Weight":2,
"Douglas Murray":2,
"Drew Doughty":1,
"Drew Miller":2,
"Drew Stafford":2,
"Duncan Keith":2,
"Dustin Brown":1,
"Dustin Byfuglien":1,
"Dustin Jeffrey":2,
"Dustin Penner":2,
"Dwayne Roloson":2,
"Ed Jovanovski":2,
"Eric Belanger":2,
"Eric Boulton":3,
"Eric Brewer":2,
"Eric Fehr":2,
"Eric Godard":2,
"Eric Nystrom":2,
"Eric Staal":1,
"Eric Tangradi":2,
"Erik Christensen":2,
"Erik Cole":2,
"Erik Condra":2,
"Erik Johnson":2,
"Erik Karlsson":2,
"Ethan Moreau":2,
"Evander Kane":2,
"Evgeni Malkin":1,
"Evgeny Dadonov":2,
"Fedor Tyutin":2,
"Fernando Pisani":2,
"Filip Kuba":2,
"Francis Bouillon":2,
"Francis Lessard":2,
"Francois Beauchemin":2,
"Frans Nielsen":2,
"Freddy Meyer":2,
"Fredrik Modin":2,
"Fredrik Sjostrom":2,
"George Parros":3,
"Gilbert Brule":2,
"Grant Clitsome":2,
"Greg Campbell":5,
"Greg Zanon":2,
"Guillaume Latendresse":2,
"Hal Gill":2,
"Henrik Karlsson":2,
"Henrik Lundqvist":1,
"Henrik Sedin":1,
"Henrik Tallinder":2,
"Henrik Zetterberg":1,
"Ian Cole":2,
"Ian Laperriere":2,
"Ian White":2,
"Ilya Bryzgalov":2,
"Ilya Kovalchuk":1,
"J. P. Dumont":2,
"Jack Hillen":2,
"Jack Johnson":2,
"Jack Skille":2,
"Jacob Josefson":2,
"Jake Dowell":3,
"Jakub Kindl":2,
"Jakub Voracek":2,
"Jamal Mayers":3,
"James Neal":2,
"James Reimer":2,
"James van Riemsdyk":2,
"James Wisniewski":2,
"Jamie Benn":2,
"Jamie Langenbrunner":2,
"Jamie McBain":2,
"Jan Hejda":2,
"Jannik Hansen":2,
"Jared Boll":3,
"Jared Spurgeon":2,
"Jarkko Ruutu":2,
"Jarome Iginla":1,
"Jaroslav Halak":2,
"Jaroslav Spacek":2,
"Jarret Stoll":2,
"Jason Arnott":2,
"Jason Blake":2,
"Jason Chimera":2,
"Jason Demers":2,
"Jason Garrison":2,
"Jason Jaffray":2,
"Jason LaBarbera":2,
"Jason Pominville":2,
"Jason Spezza":1,
"Jason Strudwick":2,
"Jason Williams":2,
"Jay Beagle":2,
"Jay Bouwmeester":2,
"Jay Harrison":2,
"Jay McClement":2,
"Jay Rosehill":2,
"Jean-Francois Jacques":2,
"Jean-Sebastien Giguere":2,
"Jeff Carter":1,
"Jeff Halpern":2,
"Jeff Schultz":2,
"Jeff Skinner":2,
"Jeff Tambellini":2,
"Jeff Woywitka":2,
"Jerome Samson":2,
"Jerred Smithson":2,
"Jesse Winchester":2,
"Jhonas Enroth":2,
"Jim Slater":2,
"Jim Vandermeer":2,
"Jimmy Howard":2,
"Jiri Hudler":2,
"Jiri Tlusty":2,
"Jochen Hecht":2,
"Jody Shelley":3,
"Joe Callahan":2,
"Joe Corvo":2,
"Joe Pavelski":2,
"Joe Thornton":1,
"Joel Ward":2,
"Joey Crabb":2,
"Joey MacDonald":2,
"Joffrey Lupul":2,
"Johan Franzen":2,
"Johan Hedberg":2,
"John Carlson":2,
"John Erskine":2,
"John Madden":2,
"John Scott":2,
"John Tavares":1,
"John-Michael Liles":2,
"Johnny Boychuk":1,
"Johnny Oduya":2,
"Jonas Gustavsson":2,
"Jonas Hiller":2,
"Jonas Holos":2,
"Jonathan Bernier":2,
"Jonathan Ericsson":2,
"Jonathan Quick":2,
"Jonathan Toews":1,
"Jonathon Blum":2,
"Joni Pitkanen":2,
"Jordan Eberle":2,
"Jordan Hendry":2,
"Jordan Leopold":2,
"Jordan Staal":2,
"Jordin Tootoo":2,
"Jose Theodore":2,
"Josh Bailey":2,
"Josh Gorges":2,
"Josh Harding":2,
"Jussi Jokinen":2,
"Justin Abdelkader":2,
"Justin Braun":2,
"Justin DiBenedetto":2,
"Justin Peters":2,
"Justin Williams":2,
"Kari Lehtonen":2,
"Karl Alzner":2,
"Karlis Skrastins":2,
"Keaton Ellerby":2,
"Keith Aulie":2,
"Keith Ballard":2,
"Keith Yandle":2,
"Kent Huskins":2,
"Kevin Bieksa":2,
"Kevin Klein":2,
"Kevin Porter":2,
"Kevin Poulin":2,
"Kevin Shattenkirk":2,
"Kevin Westgarth":3,
"Kimmo Timonen":2,
"Kris Draper":2,
"Kris Russell":2,
"Kris Versteeg":2,
"Kristian Huselius":2,
"Kristopher Letang":2,
"Krys Barch":3,
"Kurt Sauer":2,
"Kurtis Foster":2,
"Kyle Brodziak":2,
"Kyle Chipchura":2,
"Kyle Clifford":3,
"Kyle Cumiskey":2,
"Kyle Okposo":2,
"Kyle Quincey":2,
"Kyle Turris":2,
"Kyle Wellwood":2,
"Kyle Wilson":2,
"Ladislav Smid":2,
"Lars Eller":2,
"Lauri Korpikoski":2,
"Lee Stempniak":2,
"Lee Sweatt":2,
"Liam Reddox":2,
"Linus Omark":2,
"Logan Couture":1,
"Loui Eriksson":2,
"Lubomir Visnovsky":2,
"Luca Sbisa":2,
"Luke Adam":2,
"Luke Schenn":2,
"Magnus Paajarvi":2,
"Manny Malhotra":2,
"Marc Methot":2,
//"Marc Savard":7,
"Marc Staal":2,
"Marc-Andre Bergeron":2,
"Marc-Andre Fleury":2,
"Marc-Edouard Vlasic":2,
"Marcel Goc":2,
"Marco Sturm":2,
"Marcus Johansson":2,
"Marek Svatos":2,
"Marek Zidlicky":2,
"Marian Gaborik":2,
"Marian Hossa":2,
"Mark Eaton":2,
"Mark Fayne":2,
"Mark Fistric":2,
"Mark Fraser":2,
"Mark Giordano":2,
"Mark Letestu":2,
"Mark Mancari":2,
"Mark Parrish":2,
"Mark Recchi":1,
"Mark Streit":2,
"Mark Stuart":2,
"Martin Biron":2,
"Martin Brodeur":1,
"Martin Erat":2,
"Martin Hanzal":2,
"Martin Havlat":1,
"Martin St. Louis":1,
"Marty Reasoner":2,
"Marty Turco":2,
"Mason Raymond":2,
"Mathieu Darche":2,
"Mathieu Garon":2,
"Mats Zuccarello":2,
"Matt Bartkowski":1,
"Matt Bradley":2,
"Matt Calvert":2,
"Matt Carkner":3,
"Matt Carle":2,
"Matt Cooke":6,
"Matt Corrente":2,
"Matt Cullen":2,
"Matt D'Agostini":2,
"Matt Duchene":2,
"Matt Gilroy":2,
"Matt Greene":2,
"Matt Halischuk":2,
"Matt Hendricks":3,
"Matt Hunwick":2,
"Matt Martin":3,
"Matt Moulson":2,
"Matt Niskanen":2,
"Matt Smaby":2,
"Matt Stajan":2,
"Matt Taormina":2,
"Matthew Lombardi":2,
"Mattias Ohlund":2,
"Mattias Ritola":2,
"Mattias Tedenby":2,
"Max Pacioretty":2,
"Maxim Lapierre":2,
"Maxime Talbot":2,
"Michael Cammalleri":2,
"Michael Frolik":2,
"Michael Grabner":2,
"Michael Rupp":3,
"Michael Ryder":1,
"Michal Handzus":2,
"Michal Neuvirth":2,
"Michal Repik":2,
"Michal Rozsival":2,
"Micheal Haley":2,
"Miikka Kiprusoff":2,
"Mikael Backlund":2,
"Mikael Samuelsson":2,
"Mike Brown":3,
"Mike Comrie":2,
"Mike Fisher":2,
"Mike Green":2,
"Mike Grier":2,
"Mike Knuble":2,
"Mike Komisarek":2,
"Mike Lundin":2,
"Mike Modano":2,
"Mike Mottau":2,
"Mike Ribeiro":1,
"Mike Richards":1,
"Mike Santorelli":2,
"Mike Sauer":2,
"Mike Smith":2,
"Mike Weaver":2,
"Mikhail Grabovski":2,
"Mikkel Boedker":2,
"Mikko Koivu":1,
"Milan Hejduk":2,
"Milan Jurcina":2,
"Milan Lucic":1,
"Milan Michalek":2,
"Nate Thompson":2,
"Nathan Gerbe":2,
"Nathan Horton":1,
"Nathan Lawson":2,
"Nick Boynton":2,
"Nick Foligno":2,
"Nick Johnson":2,
"Nick Leddy":2,
"Nick Palmieri":2,
"Nick Schultz":2,
"Nick Spaling":2,
"Nicklas Backstrom":1,
"Nicklas Grossman":2,
"Niclas Bergfors":2,
"Niclas Wallin":2,
"Nik Antropov":2,
"Nikita Nikitin":2,
"Niklas Backstrom":2,
"Niklas Hagman":2,
"Niklas Hjalmarsson":2,
"Niklas Kronwall":2,
"Nikolai Khabibulin":2,
"Nikolai Kulemin":2,
"Nikolay Zherdev":2,
"Oliver Ekman-Larsson":2,
"Olli Jokinen":2,
"Ondrej Pavelec":2,
"Oskars Bartulis":2,
"P.A. Parenteau":2,
"P.K. Subban":2,
"Pascal Dupuis":2,
"Patric Hornqvist":2,
"Patrice Bergeron":1,
"Patrice Cormier":2,
"Patrick Dwyer":2,
"Patrick Kaleta":3,
"Patrick Kane":1,
"Patrick Lalime":2,
"Patrick Marleau":1,
"Patrick Sharp":2,
"Patrik Berglund":2,
"Patrik Elias":2,
"Paul Bissonnette":3,
"Paul Gaustad":2,
"Paul Mara":2,
"Paul Martin":2,
"Paul Stastny":1,
"Pavel Datsyuk":1,
"Pavel Kubina":2,
"Pekka Rinne":2,
"Peter Budaj":2,
"Peter Harrold":2,
"Peter Mueller":2,
"Peter Regin":2,
"Phil Kessel":1,
"Philip McRae":2,
"Philippe Dupuis":2,
"Pierre-Marc Bouchard":2,
"R. J. Umberger":2,
"Radek Dvorak":2,
"Radek Martinek":2,
"Radim Vrbata":2,
"Raffi Torres":3,
"Raitis Ivanans":2,
"Randy Jones":2,
"Ray Emery":2,
"Ray Whitney":2,
"Rene Bourque":2,
"Rich Peverley":1,
"Rick DiPietro":2,
"Rick Nash":1,
"Rob Niedermayer":2,
"Rob Schremp":2,
"Rob Scuderi":2,
"Roberto Luongo":1,
"Robyn Regehr":2,
"Rod Pelley":2,
"Roman Hamrlik":2,
"Roman Polak":2,
"Ron Hainsey":2,
"Rostislav Klesla":2,
"Rostislav Olesz":2,
"Ruslan Fedotenko":2,
"Ruslan Salei":2,
"Ryan Callahan":2,
"Ryan Carter":2,
"Ryan Getzlaf":1,
"Ryan Johnson":2,
"Ryan Jones":2,
"Ryan Kesler":1,
"Ryan Malone":2,
"Ryan McDonagh":2,
"Ryan Miller":2,
"Ryan O'Byrne":2,
"Ryan O'Reilly":2,
"Ryan Potulny":2,
"Ryan Reaves":2,
"Ryan Shannon":2,
"Ryan Smyth":2,
"Ryan Stoa":2,
"Ryan Suter":2,
"Ryan White":2,
"Ryan Whitney":2,
"Ryan Wilson":2,
"Ryane Clowe":2,
"Saku Koivu":2,
"Sam Gagner":2,
"Sami Lepisto":2,
"Sami Salo":2,
"Samuel Pahlsson":2,
"Scott Clemmensen":2,
"Scott Gomez":2,
"Scott Hannan":2,
"Scott Hartnell":2,
"Scott Nichol":2,
"Scott Parse":2,
"Scott Timmins":2,
"Scottie Upshall":2,
"Sean Avery":3,
"Sean Bergenheim":2,
"Sean O'Donnell":2,
"Semyon Varlamov":2,
"Sergei Bobrovsky":2,
"Sergei Gonchar":2,
"Sergei Kostitsyn":2,
"Sergei Samsonov":2,
"Shane Doan":1,
"Shane Hnidy":1,
"Shane O'Brien":3,
"Shaone Morrisonn":2,
"Shawn Horcoff":2,
"Shawn Matthias":2,
"Shawn Thornton":3,
"Shea Weber":1,
"Sheldon Brookbank":2,
"Sidney Crosby":1,
"Simon Gagne":2,
"Stephane Robidas":2,
"Stephen Weiss":2,
"Steve Bernier":2,
"Steve Downie":3,
"Steve Eminger":2,
"Steve MacIntyre":3,
"Steve Mason":2,
"Steve Montador":2,
"Steve Ott":3,
"Steve Staios":2,
"Steve Sullivan":2,
"Steven Kampfer":1,
"Steven Stamkos":1,
"T.J. Galiardi":2,
"T.J. Hensick":2,
"T.J. Oshie":2,
"Tanner Glass":3,
"Taylor Chorney":2,
"Taylor Hall":2,
"Taylor Pyatt":2,
"Teddy Purcell":2,
"Teemu Selanne":1,
"Theo Peckham":2,
"Thomas Vanek":1,
"Tim Brent":2,
"Tim Connolly":2,
"Tim Gleason":2,
"Tim Jackman":3,
"Tim Kennedy":2,
"Tim Stapleton":2,
"Tim Thomas":1,
"Tobias Enstrom":2,
"Toby Petersen":2,
"Todd Bertuzzi":8,
"Todd Marchant":2,
"Tom Gilbert":2,
"Tom Kostopoulos":2,
"Tom Poti":2,
"Tom Pyatt":2,
"Tom Wandell":2,
"Tomas Fleischmann":2,
"Tomas Kaberle":1,
"Tomas Kopecky":2,
"Tomas Plekanec":1,
"Tomas Vincour":2,
"Tomas Vokoun":2,
"Toni Lydman":2,
"Torrey Mitchell":2,
"Travis Hamonic":2,
"Travis Moen":2,
"Travis Zajac":1,
"Trent Hunter":2,
"Trevor Daley":2,
"Trevor Gillies":3,
"Trevor Lewis":2,
"Troy Bodie":2,
"Troy Brouwer":2,
"Tuomo Ruutu":2,
"Tuukka Rask":1,
"Ty Conklin":2,
"Tyler Bozak":2,
"Tyler Ennis":2,
"Tyler Kennedy":2,
"Tyler Myers":2,
"Tyler Seguin":1,
"Tyler Sloan":2,
"Vaclav Prospal":2,
"Valtteri Filppula":2,
"Vernon Fiddler":2,
"Victor Hedman":2,
"Viktor Stalberg":2,
"Ville Leino":2,
"Vincent Lecavalier":1,
"Vladimir Sobotka":2,
"Vladimir Zharkov":2,
"Warren Peters":2,
"Wayne Simmonds":2,
"Willie Mitchell":2,
"Wojtek Wolski":2,
"Yannick Weber":2,
"Zach Bogosian":2,
"Zach Parise":1,
"Zack Smith":2,
"Zbynek Michalek":2,
"Zdeno Chara":1,
"Zenon Konopka":3,
"Montreal Canadiens":1,
"Ottawa Senators":1
};

var aBB = [
"Patrice Bergeron",
"Johnny Boychuk",
"Gregory Campbell",
"Jordan Caron",
"Zdeno Chara",
"Joe Corvo",
"Andrew Ference",
"Zach Hamill",
"Nathan Horton",
"Steven Kampfer",
"Chris Kelly",
"David Krejci",
"Milan Lucic",
"Brad Marchand",
"Adam McQuaid",
"Daniel Paille",
"Rich Peverley",
"Benoit Pouliot",
"Tuukka Rask",
"Marc Savard",
"Tyler Seguin",
"Dennis Seidenberg",
"Tim Thomas",
"Shawn Thornton"];


var sHP_r = 'After a thorough review we can find no basis to impose supplemental discipline. This was a hockey play.';
var sF_r = '!p1 has been fined the paltry amount allowed in the CBA as a result of his actions on !p2.';
var sS_r = '!p1 has been suspended for the rest of the season.';
var sL_r = '!p1 has been banned for life.';
var sG_r = 'After careful consideration, !p1 has been suspended for !game for his actions on !p2.';
var sP1_r = ' In reviewing this play, we also took into consideration that !p !type.';

}
/*
     FILE ARCHIVED ON 09:57:42 Feb 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:11:45 May 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 106.262
  exclusion.robots: 0.222
  exclusion.robots.policy: 0.216
  RedisCDXSource: 1.929
  esindex: 0.009
  LoadShardBlock: 84.29 (3)
  PetaboxLoader3.datanode: 179.776 (5)
  CDXLines.iter: 17.2 (3)
  load_resource: 318.193 (2)
  PetaboxLoader3.resolve: 147.075 (2)
*/