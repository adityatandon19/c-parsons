/* C Parsons puzzles starter. Extend the PUZZLES array. */
const PUZZLES = [
  {
    title: "Even or Odd (C)",
    description: "Read an integer and print EVEN or ODD.",
    maxWrong: 2,
    solution: [
      "#include <stdio.h>",
      "",
      "int main(void) {",
      "    int x;",
      "    scanf(\"%d\", &x);",
      "    if (x % 2 == 0)",
      "        printf(\"EVEN\\n\");",
      "    else",
      "        printf(\"ODD\\n\");",
      "    return 0;",
      "}"
    ],
    distractors: [
      "printf(\"%d\\n\", x % 2); // distractor",
      "if (x % 2 = 0) printf(\"EVEN\\n\"); // distractor (assignment!)"
    ]
  },
  {
    title: "Sum 1..n (while loop)",
    description: "Input n and print the sum 1 + 2 + ... + n.",
    maxWrong: 2,
    solution: [
      "#include <stdio.h>",
      "",
      "int main(void) {",
      "    int n, i = 1, sum = 0;",
      "    scanf(\"%d\", &n);",
      "    while (i <= n) {",
      "        sum += i;",
      "        i++;",
      "    }",
      "    printf(\"%d\\n\", sum);",
      "    return 0;",
      "}"
    ],
    distractors: [
      "sum = n * (n + 1) / 2; // distractor: not using loop",
      "printf(\"%d\\n\", i); // distractor"
    ]
  },
  {
    title: "Vowel Count (case-insensitive)",
    description: "Read a line and count vowels (a,e,i,o,u).",
    maxWrong: 3,
    solution: [
      "#include <stdio.h>",
      "#include <ctype.h>",
      "",
      "int main(void) {",
      "    char s[100];",
      "    int i = 0, count = 0;",
      "    fgets(s, sizeof(s), stdin);",
      "    while (s[i] != '\\0') {",
      "        char ch = tolower((unsigned char)s[i]);",
      "        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')",
      "            count++;",
      "        i++;",
      "    }",
      "    printf(\"%d\\n\", count);",
      "    return 0;",
      "}"
    ],
    distractors: [
      "scanf(\"%99s\", s); // distractor: loses spaces",
      "char ch = s[i]; // distractor: not lowercasing",
      "if (ch=='y') count++; // distractor"
    ]
  }
];
