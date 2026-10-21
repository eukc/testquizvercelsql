const problems = [
    {
        id: 1,
        category: 'agg',
        categoryName: 'Aliasing (AS)',
        title: 'Rename Tuition Column',
        desc: 'Display the Tuition column and rename the result as TuitionAmount.',
        hint: "SELECT Tuition AS TuitionAmount FROM Students",
        solution: "SELECT Tuition AS TuitionAmount FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SELECT TUITION AS TUITIONAMOUNT FROM STUDENTS") || (clean.includes("SELECT TUITION AS") && clean.includes("TUITIONAMOUNT"));
        }
    },
    {
        id: 2,
        category: 'agg',
        categoryName: 'Aliasing (AS)',
        title: 'Rename FirstName Column',
        desc: 'Display the FirstName column and rename the result as StudentName.',
        hint: "SELECT FirstName AS StudentName FROM Students",
        solution: "SELECT FirstName AS StudentName FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SELECT FIRSTNAME AS STUDENTNAME FROM STUDENTS");
        }
    },
    {
        id: 3,
        category: 'agg',
        categoryName: 'Aliasing (AS)',
        title: 'Rename Grades Column',
        desc: 'Display the Grades column and rename the result as StudentGrade.',
        hint: "SELECT Grades AS StudentGrade FROM Students",
        solution: "SELECT Grades AS StudentGrade FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SELECT GRADES AS STUDENTGRADE FROM STUDENTS");
        }
    },
    {
        id: 4,
        category: 'agg',
        categoryName: 'COUNT()',
        title: 'Total Students Recorded',
        desc: 'How many students are recorded in the table? Use the result name TotalStudents.',
        hint: "SELECT COUNT(*) AS TotalStudents FROM Students",
        solution: "SELECT COUNT(*) AS TotalStudents FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("COUNT") && clean.includes("AS TOTALSTUDENTS") && clean.includes("FROM STUDENTS");
        }
    },
    {
        id: 5,
        category: 'agg',
        categoryName: 'COUNT()',
        title: 'Students in Year 1',
        desc: 'How many students are in Year 1? Use the result name Year1Students.',
        hint: "SELECT COUNT(*) AS Year1Students FROM Students WHERE YearLevel = 1",
        solution: "SELECT COUNT(*) AS Year1Students FROM Students WHERE YearLevel = 1;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("COUNT") && clean.includes("YEAR1STUDENTS") && clean.includes("YEARLEVEL = 1");
        }
    },
    {
        id: 6,
        category: 'agg',
        categoryName: 'COUNT()',
        title: 'Students with Grades >= 90',
        desc: 'How many students have a grade of 90 or higher? Use the result name HighGradeStudents.',
        hint: "SELECT COUNT(Grades) AS HighGradeStudents FROM Students WHERE Grades >= 90",
        solution: "SELECT COUNT(Grades) AS HighGradeStudents FROM Students WHERE Grades >= 90;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("COUNT") && clean.includes("HIGHGRADESTUDENTS") && clean.includes("GRADES >= 90");
        }
    },
    {
        id: 7,
        category: 'agg',
        categoryName: 'SUM()',
        title: 'Total Tuition Fee',
        desc: 'What is the total tuition fee of all students? Use the result name TotalTuition.',
        hint: "SELECT SUM(Tuition) AS TotalTuition FROM Students",
        solution: "SELECT SUM(Tuition) AS TotalTuition FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SUM(TUITION)") && clean.includes("AS TOTALTUITION");
        }
    },
    {
        id: 8,
        category: 'agg',
        categoryName: 'SUM()',
        title: 'BSIT Total Tuition',
        desc: 'What is the total tuition fee of BSIT students? Use the result name BSITTuition.',
        hint: "SELECT SUM(Tuition) AS BSITTuition FROM Students WHERE Course = 'BSIT'",
        solution: "SELECT SUM(Tuition) AS BSITTuition FROM Students WHERE Course = 'BSIT';",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SUM(TUITION)") && clean.includes("BSITTUITION") && clean.includes("BSIT");
        }
    },
    {
        id: 9,
        category: 'agg',
        categoryName: 'AVG()',
        title: 'Average Grade of All Students',
        desc: 'What is the average grade of all students? Use the result name AverageGrade.',
        hint: "SELECT AVG(Grades) AS AverageGrade FROM Students",
        solution: "SELECT AVG(Grades) AS AverageGrade FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("AVG(GRADES)") && clean.includes("AVERAGEGRADE");
        }
    },
    {
        id: 10,
        category: 'agg',
        categoryName: 'MIN() & MAX()',
        title: 'Lowest Grade in Table',
        desc: 'What is the lowest grade in the table? Use the result name LowestGrade.',
        hint: "SELECT MIN(Grades) AS LowestGrade FROM Students",
        solution: "SELECT MIN(Grades) AS LowestGrade FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("MIN(GRADES)") && clean.includes("LOWESTGRADE");
        }
    },
    {
        id: 11,
        category: 'agg',
        categoryName: 'MIN() & MAX()',
        title: 'Highest Grade in Table',
        desc: 'What is the highest grade in the table? Use the result name HighestGrade.',
        hint: "SELECT MAX(Grades) AS HighestGrade FROM Students",
        solution: "SELECT MAX(Grades) AS HighestGrade FROM Students;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("MAX(GRADES)") && clean.includes("HIGHESTGRADE");
        }
    },
    {
        id: 12,
        category: 'logic',
        categoryName: 'WHERE & Logic',
        title: 'Display BSIT or BSCS Students using IN',
        desc: 'Display all columns of BSIT and BSCS students using the IN operator.',
        hint: "SELECT * FROM Students WHERE Course IN ('BSIT', 'BSCS')",
        solution: "SELECT * FROM Students WHERE Course IN ('BSIT', 'BSCS');",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("SELECT * FROM STUDENTS") && clean.includes("IN ('BSIT'");
        }
    },
    {
        id: 13,
        category: 'logic',
        categoryName: 'WHERE & Logic',
        title: 'Display Students NOT in BSIT or BSCS',
        desc: 'Display all students who are NOT in BSIT and NOT in BSCS using the NOT IN operator.',
        hint: "SELECT * FROM Students WHERE Course NOT IN ('BSIT', 'BSCS')",
        solution: "SELECT * FROM Students WHERE Course NOT IN ('BSIT', 'BSCS');",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("NOT IN ('BSIT'");
        }
    },
    {
        id: 14,
        category: 'order',
        categoryName: 'ORDER & BETWEEN',
        title: 'Display BSIT Students Year 2 to 4',
        desc: 'Display all information from BSIT students from 2nd year to 4th year using BETWEEN, ordered by YearLevel ascending.',
        hint: "SELECT * FROM Students WHERE Course = 'BSIT' AND YearLevel BETWEEN 2 AND 4 ORDER BY YearLevel ASC",
        solution: "SELECT * FROM Students WHERE Course = 'BSIT' AND YearLevel BETWEEN 2 AND 4 ORDER BY YearLevel ASC;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("BETWEEN 2 AND 4") && clean.includes("BSIT") && clean.includes("ORDER BY YEARLEVEL");
        }
    },
    {
        id: 15,
        category: 'ddl',
        categoryName: 'DDL/DML',
        title: 'Update Student Record',
        desc: 'Update the FirstName to \'Viy\' and Course to \'BSBA\' for the student where StudentID is equal to 1.',
        hint: "UPDATE Students SET FirstName = 'Viy', Course = 'BSBA' WHERE StudentID = 1",
        solution: "UPDATE Students SET FirstName = 'Viy', Course = 'BSBA' WHERE StudentID = 1;",
        validate: (code) => {
            const clean = code.toUpperCase();
            return clean.includes("UPDATE STUDENTS") && clean.includes("VIY") && clean.includes("BSBA") && clean.includes("WHERE STUDENTID = 1");
        }
    }
];

let currentProblem = problems[0];

function init() {
    populateDropdown(problems);
    loadProblem(1);
}

function populateDropdown(list) {
    const select = document.getElementById('problem-select');
    select.innerHTML = '';
    list.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `#${p.id}: ${p.title}`;
        select.appendChild(opt);
    });
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-gray-700');
    });
    btn.classList.remove('bg-white', 'text-gray-700');
    btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');

    const filtered = cat === 'all' ? problems : problems.filter(p => p.category === cat);
    populateDropdown(filtered);
    if (filtered.length > 0) loadProblem(filtered[0].id);
}

function loadProblem(id) {
    currentProblem = problems.find(p => p.id == id);
    document.getElementById('problem-select').value = id;
    document.getElementById('task-id').textContent = `Question #${currentProblem.id} of ${problems.length}`;
    document.getElementById('task-badge').textContent = currentProblem.categoryName;
    document.getElementById('task-title').textContent = currentProblem.title;
    document.getElementById('task-desc').textContent = currentProblem.desc;

    // Blank textarea: always empty so you don't see code before typing
    document.getElementById('sql-editor').value = "";

    // Reset output box
    document.getElementById('output-box').innerHTML = `<p class="text-gray-400 italic">Type your query above and click "Check Answer" to verify...</p>`;
}

function resetEditor() {
    document.getElementById('sql-editor').value = "";
}

function showHint() {
    const out = document.getElementById('output-box');
    out.innerHTML = `<div class="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg">
        <strong class="text-amber-800">💡 Hint:</strong><br><pre class="mt-1 text-xs font-mono text-amber-950">${currentProblem.hint}</pre>
    </div>`;
}

function showSolution() {
    const out = document.getElementById('output-box');
    out.innerHTML = `<div class="p-3 bg-red-50 border border-red-200 text-red-900 rounded-lg">
        <strong class="text-red-800">🔑 Correct Solution:</strong><br><pre class="mt-1 text-xs font-mono text-red-950">${currentProblem.solution}</pre>
    </div>`;
}

function checkAnswer() {
    const code = document.getElementById('sql-editor').value.trim();
    const out = document.getElementById('output-box');

    if (!code || code.length < 3) {
        out.innerHTML = `<div class="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs">
            ⚠️ Please type your SQL answer in the box first!
        </div>`;
        return;
    }

    const passed = currentProblem.validate(code);

    if (passed) {
        out.innerHTML = `<div class="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg">
            <strong class="text-emerald-800">✅ Correct! Excellent job!</strong>
            <p class="text-xs mt-1 text-emerald-700">Your query matches the required format.</p>
        </div>`;
    } else {
        out.innerHTML = `<div class="p-3 bg-red-50 border border-red-200 text-red-900 rounded-lg">
            <strong class="text-red-800">❌ Incorrect Query</strong>
            <p class="text-xs mt-1 text-red-700">Check for missing column names, incorrect alias casing, or missing WHERE conditions.</p>
        </div>`;
    }
}

window.onload = init;
