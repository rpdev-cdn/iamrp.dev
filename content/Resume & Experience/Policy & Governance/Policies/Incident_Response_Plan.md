---
title: Incident Response Plan
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

Incident Response Plan
                                         



Approval Date               06/07/2012

Approved By                 Andrew Paisley

                            To provide a framework and guidelines as to how incidents are
Purpose
                            reported, managed, and analyzed. Unless otherwise specified, all
                            documentation relating to record keeping for the Incident Response
                            Plan shall be retained in “FogBugz”


                                             Introduction
        Maintaining the privacy and protection of clients’, employees’, and other stakeholders’ personal
information is a risk management issue for all organizations including The JDC Family of Companies
(“JDC”). Research continues to show that consumers have widespread distrust of many organizations
business practices, including how they collect, use and retain personal information. The increase in
ide11ntity theft is a concern for all of us. Business systems and processes are increasingly more
complex and sophisticated and more and more personal information continues to be collected. Laws and
regulations continue to place requirements on businesses for the protection of personal information.

       Headline articles have demonstrated that the privacy and protection of personal information is
not absolute. Many organizations have already had to deal with numerous challenges that must be
confronted when a breach of personal information occurs. In addition, some laws and regulations
require organizations to have an incident response plan in place to address a breach of personal
information.

       This Incident Response Plan is designed to address these types of issues.

                                     Incident Response Plan defined
        An Incident Response Plan is documented to provide a well-defined, organized approach for
handling any potential threat to computers and data, as well as taking appropriate action when the source
of the intrusion or incident at a third party is traced back to the organization. The Plan identifies and
describes the roles and responsibilities of the Incident Response Team. The Incident Response Team is
responsible for putting the plan into action.




                                              
                             Incident Response Plan
                                        

                                     Incident Response Team defined
        An Incident Response Team is established to provide a quick, effective and orderly response to
computer related incidents such as virus infections, hacker attempts and break-ins, improper disclosure
of confidential information to others, system service interruptions, breach of personal information, and
other events with serious information security implications. The Incident Response Team’s mission is
to prevent a serious loss of profits, public confidence or information assets by providing an immediate,
effective and skillful response to any unexpected event involving computer information systems,
networks or databases.

        The Incident Response Team is authorized to take appropriate steps deemed necessary to
contain, mitigate or resolve a computer security incident. The Team is responsible for investigating
suspected intrusion attempts or other security incidents in a timely, cost-effective manner and reporting
findings to management and the appropriate authorities as necessary. The IT Director will coordinate
these investigations.

        The Incident Response Team will subscribe to various security industry alert services to keep
abreast of relevant threats, vulnerabilities or alerts from actual incidents.

                                 Incident Response Team Members
          Information Security Officer or designee
          IT Director
          Systems Administrator
          Lead Software Developer (where necessary)

       *Please note: All contacts shall use techsupport@clunkhoose.com as an e-mail address
       unless otherwise noted.

                        Incident Response Team Roles and Responsibilities
Information Security Officer or designee of IT Director:

• Determines the nature and scope of the incident
• Contacts qualified information security specialists for advice as needed
• Contacts other members of the Incident Response Team
• Determines which Incident Response Team members play an active role in the investigation
• Provides proper training on incident handling
• Escalates to executive management as appropriate
• Contacts auxiliary departments as appropriate
• Monitors progress of the investigation
• Ensures evidence gathering, chain of custody and preservation is appropriate
• Prepares a written summary of the incident and corrective action taken
• Documents the types of personal information that may have been breached
• Monitors business applications and services for signs of attack
• Reviews audit logs of mission-critical servers for signs of suspicious activity
• Provides guidance throughout the investigation on issues relating to privacy of customer and employee
  personal information
                                              
                             Incident Response Plan
                                        

• Assists in developing appropriate communication to impacted parties
• Assesses the need to change privacy policies, procedures, and/or practices as a result of the breach
• Analyzes network traffic for signs of denial of service, distributed denial of service or other external
  attacks
• Runs tracing tools such as sniffers, transmission control protocol (TCP) port monitors and event
  loggers
• Looks for signs of a firewall breach
• Contacts external Internet service provider for assistance in handling the incident
• Takes action necessary to block traffic from suspected intruder

Systems Administrator:

• Ensures all service packs and patches are current on mission-critical computers
• Ensures backups are in place for all critical systems
• Examines system logs of critical systems for unusual activity



                                Incident Response Team Notification
        The Information Security Officer is the central point of contact for reporting computer incidents
or intrusions. The Information Security Officer will notify the IT Director. All computer security
incidents must be reported to the IT Director. A preliminary analysis of the incident will take place by
the Information Security Officer and that will determine whether an incidence response plan needs to be
activated.

                                        Types of Incidents
There are many types of computer incidents that may require Incident Response Team activation. Some
examples include:

       • Breach of personal information
       • Denial of service/Distributed denial of service
       • Excessive port scans
       • Firewall breach
       • Virus outbreak




                                              
                             Incident Response Plan
                                          


                                          Incident Classification
All reported incidents should be classified as a high/medium/low risk to facilitate the appropriate actions
to take. All Incidents shall be documented and classified in Fogbugz by the Information Security
Officer. The following table provides an example of the incident classifications:


Criticality                          Definition                                    Examples
  High         Incidents that have a monumental impact on the
                                                                              Malicious code attacks,
               organization’s business or service to customers.
                                                                               including Trojan horse
                                                                               programs and virus
                                                                               infestations.
                                                                              Loss of Data Access due
                                                                               to Malware (e.g.
                                                                               Cryptolocker)
                                                                              Unauthorized system
                                                                               access
                                                                              Loss of NPI information
                                                                              System exhibits
                                                                               behaviors typical for a
                                                                               virus.
                                                                              Insider Threat
                                                                              Unauthorized Physical
                                                                               Access
  Medium       Incidents that has a significant or has the potential to
                                                                              Password cracking
               have a monumental impact on the organization’s
                                                                               attempts
               business or service to customers.
                                                                              Insider Threat
                                                                              Password does not allow
                                                                               access to system,
                                                                               apparent change of
                                                                               password without user
                                                                               knowledge has occurred.
                                                                              Many users reporting
                                                                               that they can’t access a
                                                                               service.
                                                                              Logs indicating
                                                                               suspicious activities took
                                                                               place.
                                                                              IPS/IDS Alarm
    Low        Common incidents that have low potential to have
                                                                              Probes and network
               impact on the organization’s business or service to
                                                                               mapping
               customers.
                                                                              Denial of access to the

                                                
              Incident Response Plan
                         

Everyday security incidents that are frequent and are       system due to
well defended against.                                      unexpected lockout
                                                           Hoax Email: email
                                                            containing false
                                                            information usually
                                                            associated with chain
                                                            emails to the masses
                                                            asking them to do the
                                                            same.




                               
Incident Response Plan
          

Example Incident Classification / Response




               
                             Incident Response Plan
                                         



                              Breach of Personal Information — Overview
       This Incident Response Plan outlines steps JDC will take upon discovery of unauthorized access
to personal information on an individual that could result in harm or inconvenience to the individual
such as fraud or identity theft. The individual could be a borrower, a client, or an employee of JDC.

        Personal information is information that is, or can be, about or related to an identifiable
individual. It includes any information that can be linked to an individual or used to directly or
indirectly identify an individual. Most information the organization collects about an individual is likely
to be considered personal information if it can be attributed to an individual.

       JDC defines personal information as an individual’s name in combination with any of the
following data:

       • Social Security number
       • Driver’s license number or Identification Card number
       • Loan Number
       • Borrower Financial Information
       • Loan Documents that are NOT part of the public record (i.e. Note, payment histories, etc.)
       • Physical address information
       • Phone numbers
       • E-mail addresses
       • Medical or health information

                                   Definitions of a Security Breach
       A security breach is defined as unauthorized acquisition of data that compromises the security,
confidentiality or integrity of personal information maintained by JDC. Good faith acquisition of
personal information by an employee or agent of our company for business purposes is not a breach,
provided that the personal information is not used or subject to further unauthorized disclosure.

                                                      Controls
        JDC utilizes Data Loss Prevention (DLP), server logging and SIEM appliance, in addition to
other technologies, to alert and block potential data breaches and other security incidents. Additionally,
group policy allows us to mitigate further risks of data loss prevention such as the use of mass storage
devices, USB thumb drives and optical media.

                                           Requirements
        Data owners must identify and document all systems and processes that store or utilize personal
information on individuals. Documentation must contain system name, device name, file name,
location, database administrator and system administrator (primary and secondary contacts for each).
The business area and the IT development group must maintain the contact list of database and system
administrators.



                                               
                            Incident Response Plan
                                       

       Likewise, all authorized users who access or utilize personal information on individuals should
be identified and documented. Documentation must contain user name, department, device name (i.e.,
workstation or server), file name, location and system administrator.




                                            
                             Incident Response Plan
                                        


                                     Data Owner Responsibilities
         Data owners responsible for personal information play an active role in the discovery and
reporting of any breach or suspected breach of information on an individual. In addition, they will serve
as a liaison between JDC and any third-party involved with a privacy breach affecting the organization’s
data.

       All data owners must report any suspected or confirmed breach of personal information on
individuals to the Information Security Officer immediately upon discovery. This includes notification
received from any third-party service providers or other business partners with whom JDC shares
personal information on individuals. The Information Security Officer will notify the IT Director and
data owners whenever a breach or suspected breach of personal information on individuals affects their
business area.

       *Note: For ease of reporting, and to ensure a timely response 24 hours a day, seven days
       a week, the Information Security Officer will act as a central point of contact.

       The Information Security Officer/IT Director will determine whether the breach or suspected
breach is serious enough to warrant full incident response plan activation (See “Incident Response—
Breach of Personal Information” section). The data owner will assist in acquiring information,
preserving evidence and providing additional resources as deemed necessary by the Information
Security Officer, Legal or other Incident Response Team members throughout the investigation.

                                  Location Manager Responsibilities
       Location managers are responsible for ensuring all employees in their unit are aware of policies
and procedures for protecting personal information.

       If a breach or suspected breach of personal information occurs in their location, the location
manager must notify the Information Security Officer immediately and open an incident report. (See
“Incident Response—Breach of Personal Information” Section, Information Technology Operations
Center).

       *Note: Education and awareness communication will be directed to all employees
       informing them of the proper procedures for reporting a suspected breach of personal
       information on an individual.

                              When Notification Is Required
      The following incidents may require notification to individuals under contractual
commitments or applicable laws and regulations:

       • Notify customers/clients/represented parties within twenty-four (24) hours of an
         occurrence of a suspected and potential or actual security attack or incident involving
         the customer’s/client’s/represented party’s information.
       • A user (employee, contractor or third-party provider) has obtained unauthorized access
         to personal information maintained in either paper or electronic form.

                                              
                             Incident Response Plan
                                        

       • An intruder has broken into database(s) that contain personal information on an
         individual.
       • Computer equipment such as a workstation, laptop, CD-ROM or other electronic media
         containing personal information on an individual has been lost or stolen.
       • A department or unit has not properly disposed of records containing personal
         information on an individual.
       • A third-party service provider has experienced any of the incidents above, affecting the
         organization’s data containing personal information.

        The following incidents may not require individual notification under contractual
commitments or applicable laws and regulations provided that JDC can reasonably conclude
after investigation that misuse of the information is unlikely to occur, and appropriate steps are
taken to safeguard the interests of affected individuals:

       • The organization is able to retrieve personal information on an individual that was
         stolen, and based on our investigation, reasonably concludes that retrieval took place
         before the information was copied, misused, or transferred to another person who could
         misuse it.
       • The organization determines that personal information on an individual was improperly
         disposed of, but can establish that the information was not retrieved or used before it
         was properly destroyed.
       • An intruder accessed files that contain only individuals’ names and addresses.
       • A laptop computer is lost or stolen, but the data is encrypted and may only be accessed
         with a secure token or similar access device.

                   Incident Response — Breach of Personal Information
       Incident Response Team members must keep accurate notes of all actions taken, by
whom, and the exact time and date. Each person involved in the investigation must record his or
her own actions.


The Information Security Officer will serve as a central point of contact for reporting any
suspected or confirmed breach of personal information on an individual.

After documenting the facts presented by the caller and verifying that a privacy breach or
suspected privacy breach occurred, the Information Security Officer will open an issue in
FogBugz.

The Information Security Officer will communicate with other members of the incident response
team. The Information Security Officer advises that a breach or suspected breach of personal
information on an individual has occurred. After the Information Security Officer analyzes the
facts and confirms that the incident warrants incident response team activation, the FogBugz
ticket will be updated to indicate “Incident Response Team Activation — Critical Security
Problem.”


                                             
                              Incident Response Plan
                                          

The Information Security Officer also performs a preliminary analysis of the facts and assesses
the situation to determine the nature and scope of the incident.
1.       Informs the Legal Department and the IT Director that a possible privacy breach has been
reported and provides them an overview of the situation.
2.       Contacts the individual who reported the problem.
3.       Identifies the systems and type(s) of information affected and determines whether the
incident could be a breach, or suspected breach of personal information about an individual.
Every breach may not require participation of all Incident Response Team members (e.g., if the
breach was a result of hard copy disposal or theft, the investigation may not require the
involvement of system administrators, the firewall administrator, and other technical support
staff).
4.       Reviews the preliminary details with the Legal Department and the IT Director.
5.       If a privacy breach affecting personal information is confirmed, Incident Response Team
activation is warranted. Update the Incident Request with “Incident Response Team Activation
— Critical Security Problem.”
6.       Notify the Public Relations Department of the details of the investigation and breach.
Keep them updated on key findings as the investigation proceeds.
7.       The Information Security Officer is responsible for documenting all details of an incident
and facilitating communication to executive management and other auxiliary members as
needed.
8.       Contact all appropriate database and system administrators to assist in the investigation
effort. Direct and coordinate all activities involved with Incident Response Team members in
determining the details of the breach.
9.       Contact appropriate Incident Response Team members.
10.      Identify and contact the appropriate Data Owner affected by the breach. In coordination
with the Legal Department, IT Director and Data Owner, determine additional notification
requirements (e.g., Human Resources, external parties).
11.      If the breach occurred at a third-party location, determine if a legal contract exists. Work
with the Legal Department, IT Director and Data Owner to review contract terms and determine
next course of action.
12.      Work with the appropriate parties to determine the extent of the potential breach.
Identify data stored and compromised on all test, development and production systems and the
number of individuals at risk.
13.      Determine the type of personal information that is at risk, including but not limited to:
Name, Address, Social Security Number, and Loan Number.
14.      If personal information is involved, have the Data Owner determine who might be
affected. Coordinate next steps with the Legal Department, IT Director and Public Relations
(e.g., individual notification procedures).
15.      Determine if an intruder has exported, or deleted any personal information data.
16.      Determine where and how the breach occurred.
       • Identify the source of compromise, and the timeframe involved.
       • Review the network to identify all compromised or affected systems. Consider e-
         commerce third-party connections, the internal corporate network, test and production
         environments, virtual private networks (VPNs), and modem connections. Look at
         appropriate system and audit logs for each type of system affected.
                                               
                             Incident Response Plan
                                        

       • Document all internet protocol (IP) addresses, operating systems, domain name system
         names and other pertinent system information.
17.     Take measures to contain and control the incident to prevent further unauthorized access
to or use of personal information on individuals, including shutting down particular applications
or third-party connections, reconfiguring firewalls, changing computer access codes, and
modifying physical access controls.
       • Change all applicable passwords for IDs that have access to personal information,
         including system processes and authorized users. If it is determined that an authorized
         user’s account was compromised and used by the intruder, disable the account.
       • Do not access or alter the compromised system.
       • Do not turn off the compromised machine. Isolate the system from the network (i.e.,
         unplug cable).
18.    Monitor systems and the network for signs of continued intruder access.
19.    Preserve all system and audit logs and evidence for law enforcement and potential
criminal investigations. Ensure that the format and platform used is suitable for review and
analysis by a court of law if needed. Document all actions taken, by whom, and the exact time
and date. Each employee involved in the investigation must record his or her own actions.
Record all forensic tools used in the investigation.
20.    Notify the IT Director in coordination with the Legal Department as appropriate. Provide
a summary of confirmed findings, and of the steps taken to mitigate the situation.
21.    If an internal user (authorized or unauthorized employee, contractor, consultant, etc.) was
responsible for the breach, contact the appropriate Human Resource Manager for disciplinary
action and possible termination. In the case of contractors, temporaries, or other third-party
personnel, ensure discontinuance of the user’s service agreement with the company.
                                IT Customer Database Group
Notification Steps:

1.     If the IT Customer Database Group or Data Owners hear of or identifies a privacy breach,
contact the Information Security Officer.
2.     The IT Customer Database Group and Data Owner will assist the Information Security
Officer as needed in the investigation.

Process Steps:

1.      Monitor access to customer database files to identify and alert any attempts to gain
unauthorized access. Review appropriate system and audit logs to see if there were access
failures prior to or just following the suspected breach. Other log data should provide
information on who touched what file and when. If applicable, review security logs on any non-
host device involved (e.g., user workstation).
2.      Identify individuals whose information may have been compromised. An assumption
could be “all” if an entire table or file was compromised.
3.      Secure all files and/or tables that have been the subject of unauthorized access or use to

                                             
                              Incident Response Plan
                                         

prevent further access.
4.     Upon request from the Information Security Officer, provide a list of affected individuals,
including all available contact information (i.e., address, telephone number, e-mail address, etc.).

                                               Legal
Ongoing:

1.      Monitor relevant privacy-related legislation, provide input as appropriate, and
communicate to our clients the effect that any enacted legislation may have on them.
2.      Be cognizant of major contracts which the organization enters that may have an impact or
effect on our customers, employees and other data.
3.      Be aware of other companies’ privacy policies that may affect JDC.

When a Privacy Breach Occurs:

1.      After confirmation that a breach of personal information on individuals has occurred,
notify the Chief Legal Counsel
2.      Coordinate activities between business area and other departments (e.g., Human
Resources, if necessary).
3.      If necessary, notify the appropriate authorities (e.g., Federal Trade Commission (FTC),
etc.).
4.      Coordinate with Public Relations on the timing and content of notification to individuals.
5.      If the Information Security Officer determines that the breach warrants law enforcement
involvement, any notification to individuals may be delayed if law enforcement determines the
notification will impede a criminal investigation. Notification will take place after law
enforcement determines that it will not compromise the investigation.
6.      Notification to individuals may be delayed until the Information Security Officer is
assured that necessary measures have been taken to determine the scope of the breach and that it
has been properly investigated.
7.      Follow approved procedures for any notice of unauthorized access to personal
information about individuals.
8.      Notification to individuals should be timely, conspicuous, and delivered in any manner
that will ensure the individual receives it. Notice should be consistent with laws and regulations
the organization is subject to.
Appropriate delivery methods include:

• Written notice
• E-mail notice
• Substitute notice
        • Conspicuous posting of the notice on the JDC website.
        • Notification to major media

Items to consider including in notification to individuals:

                                               
                              Incident Response Plan
                                          


• A general description of the incident and information to assist individuals in mitigating
  potential harm, including a customer service number, steps individuals can take to obtain and
  review their credit reports and to file fraud alerts with nationwide credit reporting agencies, and
  sources of information designed to assist individuals in protecting against identity theft.
• Remind individuals of the need to remain vigilant over the next 12 to 24 months and to
  promptly report incidents of suspected identity theft.
• Inform each individual about the availability of the Federal Trade Commission’s (FTC’s)
  online guidance regarding measures to protect against identity theft, and encourage the
  individual to report any suspected incidents of identity theft to the FTC. Provide the FTC’s
  Web site address and telephone number for the purposes of obtaining the guidance and
  reporting suspected incidents of identity theft. At the time of this document’s publication, the
  Web site address is www.ftc.gov/idtheft. The toll-free number for the identity theft hotline is
  1-877-IDTHEFT.

                                        Human Resources
1.      If notified of a privacy breach affecting employee personal information, open an incident
request with the Information Security Officer to activate the Incident Response Plan for
suspected privacy breach.
2.      When notified by the Information Security Officer that the privacy breach incident
response plan has been activated for a breach of information on an individual, perform a
preliminary analysis of the facts and assess the situation to determine the nature of the incident.
3.      Work with the Information Security Officer and business area to identify the extent of the
breach.
4.      If appropriate, notify the business area that a breach has been reported and is under
investigation.
5.      Work with the business area to ensure there is no further exposure to privacy breaches.
6.      Work with the Information Security Officer and Legal Department to determine if the
incident warrants further action.

                                      Network Architecture
1.      When notified by the Information Security Officer that the privacy breach Incident
Response Plan is activated, provide assistance as determined by the details of the potential
breach.
2.      Review firewall logs for correlating evidence of unauthorized access.
3.      Implement firewall rules as needed to close any exposures identified during the
investigation.

                                         Public Relations
Ongoing:

1. Monitor consumer privacy issues and practices of other companies.
2. Monitor consumer privacy breaches of other companies and how they respond.

                                               
                             Incident Response Plan
                                         

3. Keep generic/situational talking points current.

When Privacy Breach Occurs:

1.      After confirmation that a breach of personal information about individuals has occurred,
notify the Public Relations Director.
2.      Coordinate with the Information Security Officer and Legal on the timing, content and
method of notification. Prepare and issue press release or statement, if needed.
       Vehicles for communicating include:
       a.        News wire services
       b.        JDC website — Post statement on home page or conspicuous location of website.
       c.        Intranet Web site — If appropriate for breach of employee information
       d.        E-mail
       e.        News conference — If privacy breach should reach a national and/or crisis level,
                 coordinate brief news conference at headquarters or appropriate location.
              i.         Appoint appropriate spokesperson
             ii.         Prepare statement and, if necessary, potential Q & A.
            iii.         Coach spokesperson on statement and potential Q & A.
            iv.          Invite select media to attend and cover organization’s proactive message.
             v.          Use conference as a platform for communicating who the breach involves,
                         what the organization is doing to correct breach, how it happened and the
                         organization’s apology but reassurance of its privacy policies.
3.     Prepare appropriate response to media, customer, and/or employee; and have the IT
Director and Legal Department approve prior to distribution.
4.     Proactively respond to media inquiries, if necessary.
5.     Monitor media coverage and circulate accordingly.

                                        Location Manager
1.      If the Location Manager becomes aware of or identifies a privacy breach, contact the
Information Security Officer to ensure that the IT Director and other primary contacts are
notified.
2.      The Location Manager will secure the area of the breached information (e.g., computer
room, data center, records room).
3.      The Location Manager will assist the Information Security Officer as needed in the
investigation.
4.      The Location Manager will keep the Information Security Officer and IT Director
updated on appropriate investigation information gathered.

                  Root Cause Analysis / Forensic Investigation Guidelines
Entity must initiate investigation of the suspected or confirmed loss or theft of account
information within 24 hours of compromise.


                                               
                              Incident Response Plan
                                         

The following must be included as part of the forensic investigation:

1.    Determine borrower information at risk.
   a. Number of accounts at risk, identify those stored and compromised on all test,
      development, and production systems
   b. Type of account information at risk
   c. Loan Number
   d. Borrower Name
   e. Borrower Address
   f. Any other data exported by intruder
2.    Perform incident validation and assessment.
   a. Establish how compromise occurred
   b. Identify the source of compromise
   c. Determine timeframe of compromise
   d. Review entire network to identify all compromised or affected systems, considering the
      e-commerce, corporate, test, development, and production environments as well as VPN,
      modem, DSL and cable modem connections, and any third-party connections.
     e. Determine if compromise has been contained
3.     Preserve all potential electronic evidence on a platform suitable for review and analysis
by a court of law if needed.
            a. If the computer is off do not turn it on
            b. If the computer is on photograph the screen
                     i. Collect live data - start with RAM image (Volatility, Redline) and then collect
                        other live data "as required" such as network connection state, logged on users,
                        currently executing processes etc.
                    ii. If hard disk encryption detected such as full disk encryption i.e. PGP Disk —
                        collect logical image of hard disk using dd.exe
                   iii. Document all evidence in ticketing system.
                            1. CPU, cache and register content
                            2. Routing table, ARP cache, process table, kernel statistics
                            3. Memory
                            4. Temporary file system / swap space
                            5. Data on hard disk
                            6. Remotely logged data
                            7. Data contained on archival media
                   iv. Unplug the power cord from the back of the tower - If the computer is a laptop
                        and does not shut down when the cord is removed then remove the battery
            c. Document all device model numbers and serial numbers
            d. Disconnect all cords and devices
            e. Check for HPA then image hard drives using a write blocker (clonezilla)
            f. Collect all applicable firewall and network logs in csv or report format.

                                               
                 Incident Response Plan
                            

g. Perform remote vulnerability scan of JDC’s affected systems.




                                 
                       Incident Response Plan
                                    

                                    Revision History
REVISION DATE       APPROVAL DATE         REQUESTED BY             DESCRIPTION
  Initial Version       5/17/12             Todd Stoltz     Initial Version
                                                            Added quarterly review
     9/4/12             9/4/12               Todd Stoltz
                                                            requirement
                                                            Added client notification
     7/17/14            7/17/14              Todd Stoltz
                                                            requirement within 24 hours
     5/21/15            5/21/15              Rich Dissell   Clarify Evidence Procedure
                                                            Added Incident
     1/25/16            1/25/16              Rich Dissell
                                                            Classification
                                                            Removed proper names and
     4/25/17          6/16/17 AAP            Todd Stoltz    simplified the incident
                                                            reporting structure
                                                            Annual review – updated
                                                            firm name, changed IT
     3/21/18          4/3/18 RRH             LEC/PMC
                                                            Manager to IT Director,
                                                            updated email
     11/6/18          11/7/18 LEC               PMC         Added Controls section
      4/3/19              4/3/19                LEC         Annual review – no changes
      2/7/20           2/7/20 LEC               TMS         Annual review – no changes