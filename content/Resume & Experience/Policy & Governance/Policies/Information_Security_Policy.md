---
title: Information Security Policy
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

Information Security Policy
                                


Approval Date

Approved By        Andrew Paisley

Purpose         These security policies and procedures reflect how The JDC Family of
                Companies (JDC) comply with the current laws and acts that are
                currently enacted. These also reflect the best practices of the industry
                and the requirements by our clients.

Company         The JDC Family of Companies is a single source solution for mortgage
Information     lenders, creditors, and government agencies providing a full spectrum
                of legal services specializing in real estate transactions. JDC includes
                law practices, a title agency, and a process serving company to create
                an all-inclusive, comprehensive services firm for mortgage lenders.




                                   
               Information Security Policy
                            



Physical and    1. Visitors
Environment         Visitors are pre-screened via an Intercom before permitted
Security              access to the building by front desk personnel. Visitors are
                      required to sign a log and wear a visitor badge. Visitors are
                      escorted by company personnel.
                    If the visitor is in a high-sensitive area (eg. Server room,
                      secure room, etc.) a company employee is always present.
                    Please see “Visitor Policy” for additional information.
                2. CCTV
                    The interior and exterior of the building is monitored 24x7
                      with cameras attached to a DVR.
                    Surveillance footage is archived for 30 days.
                3. Security System
                    The building is equipped with passive infrared motion
                      detectors and acoustic glass break sensors.
                    Keypads are located at every entrance of the building.
                    Access to the building controlled using key fobs.
                4. Key Fobs
                    Each employee is issued a key fob upon start of
                      employment. Each key fob is uniquely coded and marked
                      for inventory. The IT Department maintains a list of all key
                      fobs and user security system codes.
                    Upon termination of an employee, physical access is
                      reviewed.
                    Please see “Notification of Provisioning Team” for
                      additional Information.
                5. Server Room
                    The server room is located on the first floor of the building
                      in a secure interior room.
                    Access to the server room is controlled using key fobs.
                    An FM-200 fire suppression system is installed in the server
                      room and has been certified with a retention time of 27
                      minutes.
                    The server room is cooled by two AC units and monitored
                      by the security system. If the temperature goes above 81
                      degrees the security company is contacted.
                    A water sensor is also monitored by the security company.
                    UPS units are configured in an N+1 configuration.
                    A natural-gas generator provides emergency power to the
                      server room in the event of a power failure. Automated
                      weekly tests of the generator are performed on Sundays.


                              
                 Information Security Policy
                              




Network Access    1. User Account and Password Policy
                      There are two main types of accounts that exist on our
                        network: User and Service. User accounts can be further
                        sub-divided into Administrative and Non-Administrative.
                        Administrative accounts are for the exclusive use of the IT
                        Director and System Administrators. This type of account
                        is usually set up as a “Domain Administrator” and it has full
                        security access to the network. Additionally, this type of
                        account MUST be secured with a second factor of
                        authentication both internally and externally. Standard user
                        accounts are for general office staff including attorneys and
                        software developers; these accounts only include the
                        security necessary in performing job duties. Service
                        accounts are accounts set-up for a particular purpose such
                        as network scanning, backups etc. These accounts are
                        given the permissions they need to fulfill their role and
                        nothing more.
                      Each user is allocated an individual user name and
                        password. Logon passwords must not be written down or
                        disclosed to another individual. The owner of a particular
                        user name will be held responsible for all actions performed
                        using this user name.
                      Password history is enforced via Group Policy—10
                        passwords remembered
                      Maximum password age is enforced via Group Policy—
                        currently is set for 90 days
                      Minimum password age is enforced via Group Policy—
                        currently is set for 10 days
                      Minimum password length is enforced via Group Policy—
                        currently is set to 8 characters
                      Password meeting complexity requirements is enabled via
                        Group Policy; more specifically this means:
                            o Not contain the user's account name or parts of the
                                user's full name that exceed two consecutive
                                characters
                            o Contain characters from three of the following four
                                categories:
                                     English uppercase characters (A through Z)
                                     English lowercase characters (a through z)
                                     Base 10 digits (0 through 9)
                                     Non-alphabetic characters (for example, !, $,

                                
             Information Security Policy
                          

                                    #, %)
                         o Complexity requirements are enforced when
                            passwords are changed or created.
                         o Default behavior: Enabled on domain controllers
                            and disabled on stand-alone servers. Note: By
                            default, member computers follow the configuration
                            of their domain controllers.
                    Accounts will automatically be locked after 5 invalid logon
                     attempts and will remain locked for 30 minutes.

Account       2. Inactive users and privileged accounts shall be automatically
Management       disabled or locked out after 30 days of inactivity.
              3. Active Directory accounts with an initial or temporary
                 password are flagged to force a password change upon next
                 login as part of normal procedures. The temporary password
                 will be good for no longer than 7 days after which the account
                 will be disabled and locked out.
              4. Password Reset Process: Every attempt should be made to
                 identify a user’s identity before communicating an initial or
                 temporary password to that user. Face to face contact is the
                 most desirable form of verifying identity but will not always be
                 possible. For the most part, a properly formatted support ticket
                 will suffice. Remote users requesting password changes should
                 be verified by voice or other identifying information before
                 proceeding. If there are any doubts about the identity of a user,
                 an initial or temporary password shall not be issued.

              5. Access to Information
                  All information held on the networks including email, file
                    systems and databases are the property of The JDC Family
                    of Companies and staff should have no expectation of
                    privacy for this data.
                        o Please see “Authorized Use Warning” for additional
                            information.
                  Requests to access the computer account of a member of
                    staff who is absent from the office must be directed to the
                    IT Department in writing by the "Relevant Manager". The
                    access is given effect by changing the user's password and
                    allowing the "Relevant Manager" or a colleague to access
                    the account directly.
                  Staff must not issue any information to third parties unless
                    they have authorization to do so.
                        o Please see “Employee Confidentiality Agreement”


                             
                   Information Security Policy
                                

                                   for additional information.
                               o Please see “Privacy Policy” for additional
                                   information.
                               o Please see “Information & Data Classification
                                   Policy” for additional information.
                          Users are only permitted to access electronic information
                           and data that they require to perform their duties.
                          If confidential information is lost, either through loss of a
                           notebook computer, backup media or other security breach,
                           the IT Department must be notified immediately.
                               o Please see “Computer/Mobile Device Incident
                                   Policy” for additional information.

                    6. Personal use of computer systems
                        The use of any of The JDC Family of Companies
                          automation systems, including computers, fax machines and
                          all forms of Internet/Intranet access, is for The JDC Family
                          of Companies business and authorized purposes only.
                        Use of The JDC Family of Companies computers &
                          networks is a privilege granted by management and may be
                          revoked at any time for inappropriate conduct carried out on
                          such systems.


                    7. User Account Review
                        It is the Responsibility of the IT Department to conduct a
                       quarterly review of all physical security, Active Directory,
                       database, outside websites requiring user credentials, and any
                       other services requiring credentials.
                        The IT Department shall review both login viability and
                       security access. The IT Department shall be responsible for
                       deleting uncontested disabled accounts found during this
                       review and disable any active accounts that should be disabled.
                        All actions taken and account changes made pursuant to this
                       policy shall be documented by the It Department in Fogbugz.
                       Any unusual findings shall be reported to management.




Network Security    1. General
                        PCs and notebook computers must not be left unattended
                          for long periods while signed-on.

                                  
Information Security Policy
            

           o Please see “Clean Desk Policy” for additional
               information.
     Corruption of PC's or notebook's data or software by
       malicious software (e.g. a computer virus or a worm) must
       be reported immediately to the IT Department.
     Only approved users of the Information Technology team
       are permitted to scan our organization for vulnerabilities,
       apply security fixes, or apply other compensating controls
       to improve the security of our environment.
     IT equipment must not be removed from The JDC Family
       of Companies premises unless written approval has been
       received from the IT Department. An exception is made for
       authorized off-site backups providing they are adequately
       protected against unauthorized access.
     All affiliated companies are bound by the same
       infrastructure and information security policies as the Law
       Offices of John D. Clunk Co., LPA.
 2. Preventative Measures
     Please see “Antivirus-Malware-Virus Policy”.
     Please see “Backup and Data Retention Policy”.
     Please see “Infrastructure Hardening Policy”.
     Please see “Patch Management and System Updates
       Policy”.
     Please see “Security Log Policy”.
 3. Hardware
     Confidentiality
       o Servers, PCs and notebooks for disposal must have the
           hard disk 'wiped clean' before they are distributed
           outside The JDC Family of Companies.
       o Please see “Document and Media Destruction Policy”
           for additional information.
     Notebooks and Portable Devices
       o All reasonable precautions must be taken to protect
           equipment against damage, loss and theft. The
           equipment must not be left unattended in any public
           place.
       o Please see “Computer/Mobile Device Incident Policy”
           for additional information.
       o Please see “Encryption Policy” for additional
           information.
       o Please see “PDA & Smartphone Security Policy” for
           additional information.
     Restrictions
       o No outside equipment may be plugged into the The JDC

               
Information Security Policy
             

           Family of Companies network without IT’s permission.
       o All hardware devices acquired for or on behalf of The
           JDC Family of Companies or developed by The JDC
           Family of Companies employees on behalf of the
           company is and shall be deemed The JDC Family of
           Companies property. All such hardware devices must be
           used in compliance with applicable licenses, notices,
           contracts, and agreements.
 4. Software
     Software must not be copied, removed or transferred to any
       third party or non-organizational equipment such as home
       PCs without written authorization from the IT Department.
     Only software that has been authorized by the IT
       Department may be used on PCs and notebook computers
       connected to the The JDC Family of Companies IT
       network.
     Downloading of any executable files (.exe) or software
       from the Internet is forbidden without written authorization
       from the IT Department/relevant IT resource. Staff may be
       given this authorization based on their specific job
       requirements.
     Copyright
       o Copyright stipulations governing vendor-supplied
           software must be observed at all times.
       o The IT Department is responsible for maintaining
           records of software licenses. Software that is acquired
           on a trial basis must be used in accordance with the
           vendor's copyright instructions.
       o All software developed within The JDC Family of
           Companies is the property of The JDC Family of
           Companies and must not be copied or distributed
           without prior written authorization from the IT
           Department.
       o DEPLOYMENT OF SOFTWARE WITHOUT
           FIRST OBTAINING THE PROPER LICENSING
           IS STRICTLY PROHIBITED AND SUBJECT TO
           DISCIPLINARY ACTION UP TO AND
           INCLUDING TERMINATION OF
           EMPLOYMENT.
 5. Software Development
     Please see “Software Development Life Cycle”.
     Please see “Quarterly Security Audit for Proprietary
       Software of the JDC Family of Companies”.


               
                      Information Security Policy
                                      

Software and       The IT Director or his designee shall periodically conduct an
Hardware Inventory inventory of all hardware and software assets. A record of that
                   inventory shall be kept and made available to executive management
                   upon request with any action items notated. Currently this can be
                   accomplished using “PDQ Inventory”.
                      Any software or hardware that is found to be unpatched or
                      unsupported must be considered for retirement. If the system is unable
                      to be retired the appropriate measures must be taken to safeguard the
                      system, and an appropriate plan put in place for its future retirement.



Internet and Email       1. General
                             All employees of The JDC Family of Companies have a
                               responsibility to use the Internet in a professional, ethical
                               and lawful manner. Users must regard Internet access as a
                               privilege, which can be revoked.
                             Users must not use The JDC Family of Companies Internet
                               facilities to download, display, generate and/or pass on to
                               others material whether in text, pictures or any other form,
                               which would be regarded as offensive. It is important to
                               note that what constitutes offensive material is not one for
                               the sender to determine - it is the effect on anyone viewing
                               the material that is considered important. In law, possession
                               of some material is deemed to be a serious criminal offence,
                               whether in the workplace or otherwise.
                             All access to the Internet for purposes of business,
                               including access to all client websites, by The JDC Family
                               of Companies network will be via an approved channel that
                               is secured by a firewall.
                             Users must not deliberately perform acts that waste
                               computer resources or unfairly monopolize resources to the
                               exclusion of others. These acts include, but are not limited
                               to, sending mass mailings or chain letters, spending
                               excessive amounts of time on the Internet, failing to exit
                               from websites, engaging in online chat groups, uploading or
                               downloading large files, accessing streaming audio and/or
                               video files, or otherwise creating unnecessary loads on
                               network traffic associated with non-business-related uses of
                               the Internet.
                             The JDC Family of Companies reserves the right to review,
                               audit, intercept, access and disclose all access to the
                               Internet. This includes emails sent and received in addition
                               to websites visited and files downloaded from the Internet.

                                        
                   Information Security Policy
                                

                    2. Email
                        Email users must exercise caution with any external
                         attachments other than those received from a trusted source,
                         as these attachments may contain a computer virus.
                        Users must not represent themselves as another individual
                         in electronic communications.
                        Email users must be aware of the risks associated using
                         email to send confidential or commercially sensitive
                         information.
                        If any person receives email, which they deem to be
                         inappropriate, offensive or illegal, they must inform their
                         "Department Head". Immediate reporting of incidents
                         facilitates more successful identification of the source and
                         other details.
                        All emails that are sent externally are appended with a
                         Confidentiality Notice. Users must not attach their own
                         disclaimers to emails.
                        Please see “Encryption Policy.
                        Please see “Information Asset and Data Classification
                         Policy”.

Exception Policy    Purpose
                    It is the intent of The JDC Family of Companies that all users
                         and custodians of information technology resources adopt
                         The JDC Family of Companies security policies and
                         procedures. However, there will be situations where the
                         strict application of a policy would significantly impair the
                         functionality of a service and the policy or procedure must
                         be modified to accommodate specific requirements. This
                         process provides a method for documenting an exception to
                         compliance with a (The JDC Family of Companies) security
                         policy or procedure.

                    Scope
                    This process applies to all of The JDC Family of Companies
                       security standards and procedures.
                    Description
                    An exception to a policy or procedure may be granted in any of
                       the following situations:
                     Temporary exception, where immediate compliance would
                       disrupt critical operations.
                     Another acceptable solution with equivalent protection is
                       available.


                                  
                Information Security Policy
                                

                       A superior solution is available. An exception will be
                        granted until the solution can be reviewed, and standards
                        or procedures can be updated to allow the better solution.
                       A legacy system is being retired (utilize a process to manage
                        risk).
                       Lack of resources.

                   Process
                   The IT Director or managing partner(s) must acknowledge and
                      approve all requests for exceptions to The JDC Family of
                      Companies policies.
                   After acknowledging and approving an exception is needed an
                      Exception Request must be submitted to the IT Director or
                      managing partner(s).
                   A general description of the Exception Request, including:
                   1. Description of why they are not in compliance.
                   2. Risks posed by non-compliance.
                   3. Methods and resources to be used to either meet compliance
                      or manage the risk.
                   4. Date by which compliance will be met or state of non-
                      compliance ends.




Remote Access   Purpose
                To define how an employee may remotely access the system.
                Scope
                This process applies to all of The JDC Family of Companies security
                standards and procedures.
                Description
                All remote access to systems must be secured with two-factors of
                authentication. All employees who remotely access the web portal are
                issued RSA tokens for two-factor authentication.




Printing and    Purpose
Reproduction    To define when printing and reproduction is appropriate.
                Scope
                This process applies to all of The JDC Family of Companies security

                                  
                       Information Security Policy
                                       

                       standards and procedures.
                       Description
                       Employees are discouraged from committing anything to paper unless
                       there is a legitimate business purpose.

Disciplinary Actions   Violation of this policy may result in disciplinary action up to and
                       including termination of employment.




                                         
                   Information Security Policy
                                  

                                  Revision History
REVISION DATE        APPROVAL            REQUESTED BY                DESCRIPTION
                       DATE
 Initial Version       4/19/11                  AAP
      5/5/11           5/5/11                             Password policy changes
      6/3/11           6/3/11                             Exception policy added
     7/29/11           7/29/11                            Updated to include references to all
                                                          policies
    1/20/12            1/20/12                            Updated Account Management area to
                                                          include initial/temporary password
                                                          procedures
   12/21/12           12/21/12                            Added language to reflect that affiliated
                                                          companies are bound by the same
                                                          infrastructure and polices as the law
                                                          firm.
    5/22/13            5/22/13                            Further specifications on the types of
                                                          user accounts on JDC network
    10/6/14            10/6/14                  AAP       Added disciplinary action to policy
    4/30/15            4/30/15                  AAP       Added provision for user account review
                                                          process
     2/2/16          2/2/16 AAP                 TMS       Added language regarding software
                                                          deployment without proper licensing
    6/16/17          6/16/17 AAP                TMS       Streamlined language in policy
    11/3/17             11/3/17                 TMS       Updated Network Access and Account
                                                          Management sections
     3/8/18              3/8/18                RPG        Added account lockout
    3/21/18          3/21/18 RRH             LEC/PMC      Annual review – updated firm name
    4/16/19           7/1/19 RRH               RPG        Removed       redundant    Vulnerability
                                                          Scanning and Penetration Testing
                                                          Policy; renamed Backup and Data
                                                          Retention Policy; renamed Data
                                                          Leakage      Prevention     Policy     to
                                                          Information      Asset     and      Data
                                                          Classification Policy; Added approved
                                                          users for scans of our organization;
                                                          Added Printing and Reproduction
                                                          section
   1/16/2020        1/16/2020 LEC         1/16/2020 PMC   Updated General section under Internet
                                                          and Email to include access to all client
                                                          websites.
     2/7/20          2/7/20 LEC                 TMS       Replaced floor designation with
                                                          building.