---
title: Software Development Life Cycle
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

Software Development Life Cycle
                                        



Approval Date               7/11/2011

Approved By                 Andrew Paisley

                            Description of the Software Development Life Cycle (“SDLC”),
Purpose
                            Environment and Controls for the JDC Family of Companies


                                              Environment

The Software Development Lifecycle at the JDC Family of Companies is designed to facilitate rapid
development by a small group of senior level developers, and places more responsibility and less
restriction on their work. Requirements also change often in our environment and to that end, we have
primarily adopted the methods and controls advocated by Agile Software Development. Agile Software
Development emphasizes:

   1.   Individuals and interactions over processes and tools
   2.   Working software over comprehensive documentation
   3.   Customer collaboration over contract negotiation
   4.   Responding to change over following a plan

                                        Acquisition and Initiation

Any user of any software of the JDC Family of Companies is welcome to suggest new projects or
changes to existing projects through their department head. Changes by attorneys do not require further
approval unless they have significant effects outside their department’s area. Changes to prevent
unintended behavior of the system (bug fixes), do not require approval unless significant risk is
involved. Changes by anyone other than an attorney should first go to their department head for
approval, and then to a partner or leadership meeting if they have significant effects outside their
department area. It is the IT Director’s responsibility to determine how much authorization is required;
however, software developers may use their own discretion to determine how much authorization is
needed for minor changes of low risk.
                                               Requirements

Software Developers will be responsible for providing any requirements for any project, if asked by the
IT Director. Requirements include, but are not limited to, time, personnel, hardware, and third-party
software. The System Administrator is responsible for purchasing and implementing hardware and
third-party software, and may have some input into requirements, but requirements are the Developers’
responsibility. The IT Director has authority to start or continue any project, even if the requirements
are not provided.




                                               
              Software Development Life Cycle
                                     


                                 Security Requirement Guidelines

1. Development Host Security
   Development hosts shall be held to the same security standards as production hosts. Please refer
   to host security in the Infrastructure Hardening Policy for baseline.

   In addition, the following applies to development systems:
   o Development data must be sanitized of all NPI data ( Loan Numbers, SSN, EIN)
         Data deployment procedure as follows:
            1.Export a password protected backup from production SQL.
            2.Import backup to development SQL.
            3.Sanitize database of NPI data:
                   Update dbo.FileMain Set LoanNo = null
                   Update dbo.Contact Set ssn = null, ein = null
   o Development access should be restricted to IT and test users.
         Disable all unused SQL accounts.

2. SQL Injection
     a. Dynamically created SQL Statements are strongly discouraged.
     b. Dynamically created SQL Statements *must* be thoroughly validated that they are not
         capable of any possible malicious use.
     c. Developers are to look for dynamically created SQL Statements inside stored procedures
         and other non-obvious places.

3. Cross Scripting
     a. Users should not be able to enter input that can be run as a script.
     b. ASP.NET pages without ValidateRequest set to true are suspect, but other vulnerabilities
         are possible, including code outside of ASP.NET applications.

4. Client side validation
       a. Ideally, client-side validation of input should be validated on the server with the same
          behavior as client side validation.
       b. Server side validation of client side validated data is not required, so long as the system is
          just as secure if client side validation were not implemented.
       c. Storing data that validation identifies as potentially harmful can introduce security issues.
       d. All ASP.NET pages should have ValidateRequest=”true”, or be tested extensively
          enough to guarantee input cannot cause security issues. ValidateRequest does not
          guarantee pages are free from issues, such as SQL Injection, and analysis and testing are
          still needed on pages with ValidateRequest=true.

5. URL manipulation
     a. A user should not, at any point, be able to circumvent security by manually typing over
        the url.

                                            
                 Software Development Life Cycle
                                        

          b. Ability of the user to navigate by manually typing urls is not discouraged so long as it
             cannot lead to security issues.
          c. Redirects, server.transfer and other means of loading a second page should not rely only
             on validation that occurs on the first page, if an attacker can submit directly to the second
             page and bypass security.

   6. Authentication
         a. Can a non-authenticated user do anything they should not?
         b. Can a user authenticate without providing proper credentials?
         c. How easily can a user authenticate with a dictionary attack?
         d. Are credentials stored or transmitted in plain text or other easily readable form? This
            included compiled assemblies, configuration files and view state.
         e. Easily read credentials are strongly discouraged, however if they are used, is their
            location secure?
         f. An authentication failure that indicates which part of the authentication data failed makes
            it easier for attackers to gain unauthorized access.
         g. Password entry should be obscured.

   7. Authorization
         a. Can a user perform any action they are not authorized to?
         b. Can a user, other than those allowed by company policy, change authorization for
            themselves or other users?

   8. Impersonation
         a. Code allows impersonating another user, whether a windows user, SQL Server login, or
            other user, is discouraged.
         b. Code that allows impersonation must be carefully validated to ensure malicious use is not
            possible.
   9. Unsafe and unmanaged code
         a. Use of ‘unsafe’ keyword is strongly discouraged.
         b. Unsafe and unmanaged code must be thoroughly validated.

   10. Auditing
          a. Login times and IP addresses, where audited, should be checked for unusual activity.
   11. User Modification
          a. End users should be restricted from generating new code or altering existing code.

   12. Other areas
          a. This list is not meant to be exhaustive, developers are encouraged to look for other
             vulnerabilities.

                                      Implementation and Testing

Once project requirements have been gathered, a specification document is generated by the accepting
developer with input from the end user. Once a preliminary specification is generated, depending on

                                              
                  Software Development Life Cycle
                                        

complexity, the coding process begins or further information and feedback is sought from the end user.
Upon completion of the coding and feedback process, the developer initiates unit testing usually on their
local machine. When the developer is satisfied with the unit testing process, the changes to the software
are promoted to a demo site after which the site shall be scanned using vulnerability assessment tools.
These tools should be able to detect known web and database vulnerabilities. Any vulnerabilities
uncovered through this process shall be remediated prior to making the site available to end users. Upon
completion of the final security check/vulnerability scans, the demo site is made available to end users
to test and review the proposed changes. Upon acceptance by the end user as to the changes deployed
on the demo site, an appropriate date/time is scheduled with management for deployment to our
production site. Prior to production deployment, all security related issues must be resolved. A copy of
these tests shall be maintained by the IT Director. Changes to the production site are followed up on as
needed.

                                         Releases/Completion

There are two types of releases in our environment-- Development and Production. Development
releases are promoted to a QA or demo environment for evaluation by interested parties; Production
releases are elevated to the Production area for everyday use. Software is considered complete when it
is being used in our Production area by end users in a productive, efficient, and error-free manner.
Implementation of new features or changes to existing features shall be carried out by the IT Director,
the software developers, or individual team leaders. Further refinements can be suggested by end users
and approved at the discretion of the IT Director.

                                       Maintenance and support

Software will generally be supported by the IT Department. The IT Director is responsible for
delegating maintenance and support tasks to individuals within the department.

                                             Code Review

Please reference the “Quarterly Security Audit for propriety software of the JDC Family of Companies”
for additional information.




                                              
                  Software Development Life Cycle
                                         


                                             Source Control

All artifacts of the collective sub-programs, functions, and procedures of our software are maintained in
source control.

Branching is generally not necessary, as only 1 copy of most software is used in production at a time,
and time between releases is typically only 1 week. Where multiple branches are maintained, the must
be clearly identified to prevent reintroducing vulnerabilities or other problems that have already been
fixed, or removing features that were added. No developer may create a branch in source control
without approval of the IT Director. All developers should ask the IT Director which branch to use if it
is ever unclear.

                                          References

   1. Quarterly Security Audit for Proprietary Software of the JDC Family of
      Companies - Quarterly Security Audit for Proprietary Software_V01_2010-06-04_John
      D Clunk LPA_IT.docx




                                               
                  Software Development Life Cycle
                                    

                                    Revision History
 REVISION               DATE                   NAME              DESCRIPTION
Initial Version         6/20/11                 TS
    7/29/11             7/29/11                             Added Security Requirement
                                                            Guidelines and Code Review
                                                            Sections
   5/16/13               5/16/13            Brad Bellomo    various
   8/14/14            8/14/14 AAP               PMC         Removed language stating
                                                            that changes requested by
                                                            partners are always
                                                            approved.
   2/16/16              2/16/16                 TS          Annual review – no changes
   4/12/16              4/12/16                 RD          Added Dev Host Sec.
                                                            Sanitation of data
   12/4/17              12/4/17                PMC          Annual review – no changes
   3/21/18            4/3/18 RRH             LEC/PMC        Annual review – changed
                                                            firm name, changed IT
                                                            Manager to IT Director
   5/16/19            5/16/19 LEC               PMC         Annual review – no changes
   2/14/20            2/14/20 LEC               TMS         Removed managers,
                                                            simplified language
                                                            referencing source control