# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

topics = Topic.create([
  {subject: 'Ruby'},
  {subject: 'Rust'},
  {subject: "XxXmlgNoScopezXxX"},
  {subject: 'Lisp'},
  {subject: 'Pair Programming'},
  {subject: 'Swift'},
  {subject: 'Scala'},
  {subject:  'Perl'},
  {subject:  'PHP'},
  {subject:  'Python'},
  {subject:  'Apples'},
  {subject:  'C++'},
  {subject:  'C'},
  {subject:  'B'},
  {subject:  'COBOL'}
  ])

users = User.create([
  {email: 'lambda@aa.io', password: 'lambda', first_name: 'Charles', last_name: 'Biddensworth', subscribed_topic_ids: [4, 8, 12, 14, 15], has_ever_logged_in: true, bio: 'As fine a Biddensworth as they make them. A proper British lad.', avatar: 'http://s3.amazonaws.com/fauxrum-dev/users/avatars/000/000/001/original/lucas-mccain.jpg?1443198807'},
  {email: 'lucasm@aa.io', password: 'lucasm', first_name: 'Elizabeth', last_name: 'Reddington', subscribed_topic_ids: [3, 9, 10, 11], has_ever_logged_in: true, bio: 'Expert Crumpeteerer, tallywhimbling enthusiast'},
  {email: 'quimbies@aa.io', password: 'quimbies', first_name: 'Redford', last_name: 'Calvington', subscribed_topic_ids: [1, 3, 11], has_ever_logged_in: true, avatar: "http://s3.amazonaws.com/fauxrum-dev/users/avatars/000/000/001/original/ari-brenner.jpg?1443199056" },
  {email: 'hester@aa.io', password: 'hester', first_name: 'Hester', last_name: "Clifton", subscribed_topic_ids: [9, 14, 11], has_ever_logged_in: true },
  {email: 'demo@demo.demo', password: 'demodemo', first_name: 'Demo User', last_name: 'User', subscribed_topic_ids: [], has_ever_logged_in: false }
  ])

questions = Question.create([
  {title: 'How can I use the "puts" method?', body: '', author_id: '1'},
  {title: 'What is the deal with COBOL?', body: 'What is with the capitalization?', author_id: '2'},
  {title: 'How do I tactfully mention to my partner that the timer is up?', body: '', author_id: '3'},
  {title: 'Why are there so many curly braces in Lisp?', body: '', author_id: '2'},
  {title: 'How do I write a switch statement in Ruby?', body: '', author_id: '2'},
  {title: 'I\'ve been awhile from Rust and a new wild type String appeared. So I\'m wondering what are the differences? When does one use String instead of str and vice versa? Is one of them getting deprecated?', body: '', author_id: '2'},
  {title: 'How can I get sick skills?', body: '', author_id: '2'},
  {title: 'Whilst starting to learn lisp, I\'ve come across the term tail-recursive. What does it mean?', body: '', author_id: '2'},
  {title: 'How popular in the world (I know that the stackoverflow community comes from different parts of the world) is pair programming? Have you ever worked, are you working or will you work for a company that does pair programming? What\'s your opinion on the matter?', body: '', author_id: '2'},
  {title: 'In the new Swift language from Apple, how does one call Objective-C code?

Apple mentioned that they could co-exist in one application, but does this mean that one could technically re-use old classes made in Objective-C whilst building new classes in swift?

The Reasoning

Objective-C is a platform-independent language, whereas Swift is platform-dependent. Writing non-platform-dependent code (business logic libraries) in swift would thus not be wise. However writing platform-dependent code in it (interface related for example) would be perfectly fine. Not to say it would be a good idea, however it is definitely an interest', body: '', author_id: '2'},
  {title: 'Scala vs. Groovy vs. Clojure [closed]', body: 'Can someone please explain the major differences between Scala, Groovy and Clojure. I know each of these compiles to run on the JVM but I\'d like a simple comparison between them.', author_id: '2'},
  {title: 'Why does modern Perl avoid UTF-8 by default?', body: 'I  wonder why most modern solutions built using Perl don\'t enable UTF-8 by default.

I understand there are many legacy problems for core Perl scripts, where it may break things. But, from my point of view, in the 21st century, big new projects (or projects with a big perspective) should make their software UTF-8 proof from scratch. Still I don\'t see it happening. For example, Moose enables strict and warnings, but not Unicode. Modern::Perl reduces boilerplate too, but no UTF-8 handling.', author_id: '2'},
  {title: 'How can I prevent SQL-injection in PHP?', body: '', author_id: '2'},
  {title: 'What is a metaclass in Python?', body: '', author_id: '2'},
  {title: 'Do apple seeds contain cyanide?', body: '', author_id: '2'},
  {title: 'Why is processing a sorted array faster than an unsorted array?', body: '', author_id: '2'},
  {title: 'Does anyone have a working B compiler?', body: '', author_id: '2'},
  {title: 'Why does the C preprocessor interpret the word “linux” as the constant “1”?', body: '', author_id: '2'},
  {title: 'What is your best programmer joke?', body: '', author_id: '2'}

  ])

answers = Answer.create([
  {body: 'With aplomb!', author_id: 2, question_id: 1},
  {body: 'COBOL is a compiled English-like computer programming language designed for business use! It is imperative, procedural and, since 2002, object-oriented! COBOL is primarily used in business, finance, and administrative systems for companies and governments!', author_id: 2, question_id: 2},
  {body: 'Always prefer "print"', author_id: 3, question_id: 1},
  {body: 'Ruby uses the case expression instead. The comparison is done by comparing the object in the when-clause with the object in the case-clause using the === operator. That is, it does 1..5 === a and String === a, not a === 1..5. This allows for the sophisticated semantics you see above, where you can use ranges and classes and all sorts of things rather than just testing for equality.', author_id: 1, question_id: 5},
  {body: 'str, only used as &str, is a string slice, a reference to a UTF-8 byte array. String is what used to be ~str, a growable, owned UTF-8 byte array.', author_id: 3, question_id: 6},
  {body: '10,000 hours of practice', author_id: 3, question_id: 7},
  {body: 'In traditional recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don\'t get the result of your calculation until you have returned from every recursive call.

In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of "(return (recursive-function params))" (I think that\'s the syntax for Lisp). Basically, the return value of any given recursive step is the same as the return value of the next recursive call.

The consequence of this is that once you are ready to perform your next recursive step, you don\'t need the current stack frame any more. This allows for some optimization. In fact, with an appropriately written compiler, you should never have a stack overflow snicker with a tail recursive call. Simply reuse the current stack frame for the next recursive step. I\'m pretty sure Lisp does this.', author_id: 3, question_id: 8},
  {body: 'I have worked in both instances where we heavily pair programmed, ones where we did occasionally, and ones where it was looked down upon.

I would say that I felt the most productive when we did it full time. This, I think, is because it encourages such a high degree of collaboration with the team. However, it was also important that we swapped pairs on a regular basis - once or twice a day. Here\'s some pictures of the setup at a former place:

http://www.cornetdesign.com/images/carfax

Implementing Pair Programming, however, means that you\'ve overcome several items on the Five Dysfunctions of a Team list - primarily trust and communication. It\'s also helpful to be able to get into a flow - we used Ping-Pong programming - one would write a failing test, the other would make it pass and write the next failing test, with both of us participating in refactoring as we needed to.

It can be a little scary to people who are used to having their own thing, but the collaboration it allows for is really quite amazing.', author_id: 3, question_id: 9},
  {body: 'See Apple\'s guide to Using Swift with Cocoa and Objective-C. This guide covers how to use ObjC and C code from Swift and vice versa, and has recommendations for how to convert a project or mix and match ObjC/C and Swift parts in an existing project.', author_id: 3, question_id: 10},
  {body: 'Groovy is a dynamically typed language, whose syntax is very close to Java, with a number of syntax improvements that allow for lighter code and less boilerplate. It can run through an interpreter as well as being compiled, which makes it good for fast prototyping, scripts, and learning dynamic languages without having to learn a new syntax (assuming you know Java). As of Groovy 2.0, it also has growing support for static compilation. Groovy supports closures and has support for programming in a somewhat functional style, although it\'s still fairly far from the traditional definition of functional programming.

Clojure is a dialect of Lisp with a few advanced features like Software Transactional Memory. If you like Lisp and would like to use something like it under the JVM, Clojure is for you. It\'s possibly the most functional language running on the JVM, and certainly the most famous one. Also, it has a stronger emphasis on immutability than other Lisp dialects, which takes it closer to the heart of functional language enthusiasts.

Scala is a fully object oriented language, more so than Java, with one of the most advanced type systems available on non-research languages, and certainly the most advanced type system on the JVM. It also combines many concepts and features of functional languages, without compromising the object orientation, but its compromise on functional language characteristics put off some enthusiasts of the latter.

Groovy has good acceptance and a popular web framework in Grails. It also powers the Gradle build system, which is becoming a popular alternative to Maven. I personally think it is a language with limited utility, particularly as Jython and JRuby start making inroads on the JVM-land, compared to the others.

Clojure, even discounting some very interesting features, has a strong appeal just by being a Lisp dialect on JVM. It might limit its popularity, granted, but I expect it will have loyal community around it for a long time.

Scala can compete directly with Java, and give it a run for its money on almost all aspects. It can\'t compete in popularity at the moment, of course, and the lack of a strong corporate backing may hinder its acceptance on corporate environments. It\'s also a much more dynamic language than Java, in the sense of how the language evolves. From the perspective of the language, that\'s a good thing. From the perspective of users who plan on having thousands of lines of code written in it, not so.

As a final disclosure, I\'m very familiar with Scala, and only acquainted with the other two.', author_id: 3, question_id: 11},
  {body: 'I think you misunderstand Unicode and its relationship to Perl. No matter which way you store data, Unicode, ISO-8859-1, or many other things, your program has to know how to interpret the bytes it gets as input (decoding) and how to represent the information it wants to output (encoding). Get that interpretation wrong and you garble the data. There isn\'t some magic default setup inside your program that\'s going to tell the stuff outside your program how to act.

You think it\'s hard, most likely, because you are used to everything being ASCII. Everything you should have been thinking about was simply ignored by the programming language and all of the things it had to interact with. If everything used nothing but UTF-8 and you had no choice, then UTF-8 would be just as easy. But not everything does use UTF-8. For instance, you don\'t want your input handle to think that it\'s getting UTF-8 octets unless it actually is, and you don\'t want your output handles to be UTF-8 if the thing reading from them can handle UTF-8. Perl has no way to know those things. That\'s why you are the programmer.

I don\'t think Unicode in Perl 5 is too complicated. I think it\'s scary and people avoid it. There\'s a difference. To that end, I\'ve put Unicode in Learning Perl, 6th Edition, and there\'s a lot of Unicode stuff in Effective Perl Programming. You have to spend the time to learn and understand Unicode and how it works. You\'re not going to be able to use it effectively otherwise.', author_id: 1, question_id: 12},
  {body: 'I\'d recommend using PDO (PHP Data Objects) to run parameterized SQL queries.

Not only does this protect against SQL injection, it also speeds up queries.

And by using PDO rather than mysql_, mysqli_, and pgsql_ functions, you make your app a little more abstracted from the database, in the rare occurrence that you have to switch database providers.', author_id: 3, question_id: 13},
  {body: 'A metaclass is the class of a class. Like a class defines how an instance of the class behaves, a metaclass defines how a class behaves. A class is an instance of a metaclass.', author_id: 1, question_id: 14},
  {body: 'Yes, but it would be very difficult to eat an amount that would cause serious harm to your body.', author_id: 3, question_id: 15},
  {body: 'Branch prediction. With a sorted array, the condition data[c] >= 128 is first false for a streak of values, then becomes true for all later values. That\'s easy to predict. With an unsorted array, you pay the branching cost.', author_id: 3, question_id: 16},
  {body: 'Prompted by this question, there is now a B compiler available from here: https://github.com/Leushenko/ybc

Runs on Windows, Linux, and OSX (binaries provided; in the spirit of the question it is written in an obscure language), where it produces very poor quality x86-32 assembly. Should be GCC-compatible. It is reconstructed out of the available reference material on B, and almost certainly does not reflect the language as it really was in the 1960s. Notably, in the absence of type information (B is untyped), the &a[b] == &*(a + b) rule can not hold on x86, meaning that this task is effectively impossible (without resorting to an interpreter).

The language as described is extremely small, far smaller than C, and an experienced/competent compiler programmer could likely write one for you in an afternoon.

Unfortunately this is only a partial answer, as I couldn\'t tell you where to find a good B compiler.', author_id: 3, question_id: 17},
  {body: 'In the Old Days (pre-ANSI), predefining symbols such as unix and vax was a way to allow code to detect at compile time what system it was being compiled for. There was no official language standard back then (beyond the reference material at the back of the first edition of K&R), and C code of any complexity was typically a complex maze of #ifdefs to allow for differences between systems. These macro definitions were generally set by the compiler itself, not defined in a library header file. Since there were no real rules about which identifiers could be used by the implementation and which were reserved for programmers, compiler writers felt free to use simple names like unix and assumed that programmers would simply avoid using those names for their own purposes.

The 1989 ANSI C standard introduced rules restricting what symbols an implementation could legally predefine. A macro predefined by the compiler could only have a name starting with two underscores, or with an underscore followed by an uppercase letter, leaving programmers free to use identifiers not matching that pattern and not used in the standard library.

As a result, any compiler that predefines unix or linux is non-conforming, since it will fail to compile perfectly legal code that uses something like int linux = 5;.', author_id: 3, question_id: 18},
  {body: 'A Cobol programmer made so much money doing Y2K remediation that he was able to have himself cryogenically frozen when he died. One day in the future, he was unexpectedly resurrected.

When he asked why he was unfrozen, he was told:

"It\'s the year 9999 - and you know Cobol"', author_id: 3, question_id: 19},

  ])

question_topics = QuestionTopic.create([
  {topic_id: 1, question_id: 1},
  {topic_id: 15, question_id: 2},
  {topic_id: 5, question_id: 3},
  {topic_id: 4, question_id: 4},
  {topic_id: 1, question_id: 5},
  {topic_id: 2, question_id: 6},
  {topic_id: 3, question_id: 7},
  {topic_id: 4, question_id: 8},
  {topic_id: 5, question_id: 9},
  {topic_id: 6, question_id: 10},
  {topic_id: 7, question_id: 11},
  {topic_id: 8, question_id: 12},
  {topic_id: 9, question_id: 13},
  {topic_id: 10, question_id: 14},
  {topic_id: 11, question_id: 15},
  {topic_id: 12, question_id: 16},
  {topic_id: 13, question_id: 18},
  {topic_id: 14, question_id: 17},
  {topic_id: 15, question_id: 19},






















  ])
