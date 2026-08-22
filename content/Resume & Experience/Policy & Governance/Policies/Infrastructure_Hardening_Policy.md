---
title: Infrastructure Hardening Policy
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

INFRASTRUCTURE HARDENING POLICY
                                         



Approval Date               8/31/11

Approved By                 Andrew Paisley, Executive Vice President

Also Known As                  Platform Hardening Policy

                            The organization’s IT infrastructure will be hardened according to
Purpose
                            this policy to minimize vulnerabilities.


   1. Overview
Hardening is the process of securing a system by reducing its surface of vulnerability. By the nature of
operation, the more functions a system performs, the larger the vulnerability surface.

Most systems perform a limited number of functions. It is possible to reduce the number of possible
vectors of attack by the removal of any software, user accounts or services that are not related and/or
required by the planned system functions. System hardening is a vendor specific process, as different
systems install different elements in the default install process.

The possibility of a successful attack can be further reduced by concealment. By making it difficult for a
potential attacker to identify the system being attacked the attack cannot easily exploit known
weaknesses.


   2. Scope
This policy applies to all components of the information technology infrastructure and includes:
      Computers
      Servers
      Firewalls
      Application Software
      Peripherals
      Routers and switches
      Databases
      Telephone Systems
All staff within the IT Department must understand and use this policy. Domain administrators are
responsible for ensuring that the IT infrastructure is hardened and that any subsequent changes to
systems do not affect the hardening of systems.




                                               
       INFRASTRUCTURE HARDENING POLICY
                                         

   3. Risks
Without effective hardening there is an increased risk of the unavailability of systems. This can be
caused by attackers, viruses and malware exploiting systems.

If external systems such as web servers and email servers advertise their type and version, it makes it
easier for an attacker to exploit known weaknesses.

Systems which run unnecessary services and have unnecessary or unused ports open are easier to attack.

Development systems that have NPI data may be at risk. While security standards are the same
sanitation of NPI must be done before test code is ran.


   4. Host Security
Requirements for improved security include:
      Shut down unneeded TCP/UDP servers (e.g., bootps, finger).
      For TCP/UDP servers that are necessary, make sure that access to them is limited only to the
       administrators.
      Removing unnecessary services and applications is preferable to simply disabling them through
       configuration settings because attacks that attempt to alter settings and activate a disabled service
       cannot succeed when the functional components are completely removed. Disabled services
       could also be enabled inadvertently through human error. Common types of services and
       applications that should usually be removed if not required (or disabled if they cannot be
       removed) include the following:
           o File and printer sharing services.
           o Wireless networking services.
           o Remote control and remote access programs, particularly those that do not strongly
                encrypt their communications (e.g., Telnet).
           o Directory services (e.g., Lightweight Directory Access Protocol [LDAP], Network
                Information System [NIS]).
           o Web servers and services.
           o Email services (e.g., SMTP).
           o System development tools.
      Disable any unused interfaces. Protect each and every active interface from information
       gathering and attacks.
      Protect each and every management port(s) from attacks. Disable any unused management
       port(s).
      Remove or disable all unneeded default user accounts. Consideration should be given to
       renaming predefined accounts if it will not adversely affect the system.
      Configure durable passwords. Please reference “User Account and Password Policy” in the
       overall Information Security Policy.
      Access to the local administrator account(s) will be restricted to members of the IT Department
       to prevent the installation of unauthorized software and modification of security software and
       controls.
      Install the latest service packs and patches. Please reference “Patch Management and System

                                               
       INFRASTRUCTURE HARDENING POLICY
                                        

       Updates Policy.”
      Install Anti-virus and Anti-malware software. Please reference “Antivirus / Malware / Virus
       Policy.”
      If RDP is utilized, set RDP connection encryption level to high.
      The use of removable media will be controlled by endpoint protection software.
      Remove all example or test files from the server, including sample content, scripts, and
       executable code.
      For external-facing servers, reconfigure service banners not to report the server and OS type and
       version, if possible.
      Configure Event Log Settings with the following options:
           o Maximum application log size--- 81920 KB
           o Maximum security log size--- 81920 KB
           o Maximum system log size--- 81920 KB
           o When maximum even log size is reached – Overwrite events as needed (oldest events
               first).


   5. Development Host Security
Development hosts shall be held to the same security standards as production hosts. Please refer to host
security for baseline.

       In addition, the following applies to development systems:
       o Development data must be sanitized of all NPI data ( Loan Numbers, SSN, EIN)
             Data deployment procedure as follows:
                1.Export a password protected backup from production SQL.
                2.Import backup to development SQL.
                3.Sanitize database of NPI data:
                       Update dbo.FileMain Set LoanNo = null
                       Update dbo.Contact Set ssn = null, ein = null
       o Development access should be restricted to IT and test users.
             Disable all unused SQL accounts.


   6. Network Multifunction Device Security
Requirements for improved security include:
      Make sure the firmware is at the latest revision.
      Disable unused protocols and management services.
      Change the default password to a complex password. Please reference “User Account and
       Password Policy” in the overall Information Security Policy..
      Explicitly block the multifunction device ports at the boundary router/firewall and disable these
       services if not needed.
      Enable Access Control Lists – (An access control list (or host access list) specifies individual
       host systems, or networks of host systems, that will be allowed to access the print server and the
       attached network device.)

                                               
       INFRASTRUCTURE HARDENING POLICY
                                            

    7. Simple Network Management Protocol (SNMP)
SNMP is widely used by network administrators to monitor and administer all types of computers (e.g.,
routers, switches, printers). SNMP uses an unencrypted "community string" as its only authentication
mechanism. Attackers can use this vulnerability in SNMP to possibly gather information from,
reconfigure or shut down a computer remotely.

Disable all SNMP servers on any computer where it is not necessary. However, if SNMP is a
requirement, then the following guidelines must be followed:
      Allow read-only access and not read-write access via SNMP.
      Do not use standard community strings (e.g., public, private).
      If possible, use Access Control Lists to allow a small set of computers access to the SNMP
       server on the computer.
      Alternately, use SNMPv3 which does include security features.


    8. Vulnerability Scanning
Securing a computer is an on-going process. The goal of vulnerability scanning is to identify devices on
the network that are open to known vulnerabilities. Vulnerability scanning alone is not a guarantee or
sufficient to protect a network, it should be used in conjunction with industry best practices. A
vulnerability analysis of all internal and external systems will be conducted at a minimum of every
week. Any critical vulnerabilities uncovered during the scan shall be immediately remediated and a re-
scan performed. This process shall continue until all significant vulnerabilities are patched or removed.


    9. Penetration Testing
The process involves an active analysis of the system(s) for any potential vulnerabilities that could result
from poor or improper system configuration, both known and unknown hardware or software flaws, and
operational weaknesses in process or technical countermeasures. This analysis is carried out annually or
after any significant changes are made. Any security issues that are found will be documented and
assessed for their impact, with a proposal for mitigation or a technical solution. The intent of a
penetration test is to determine the feasibility of an attack and the amount of business impact of a
successful exploit, if discovered. A record of the test results and mitigation will be kept in the helpdesk
ticketing system.

      Issues uncovered in a pen test shall be remediated based on risk and criticality as well as recommendation
       of the pen test vendor
      Issues that are remediated shall be re-submitted to the pen test vendor for re-testing until original defect is
       fully remediated


    10. Rogue Wireless Access Points
Since wireless communication is not used because of security requirements. Quarterly scans will be
performed to detect rogue Access Points. A rogue Access Point (AP) is any device that adds an
unauthorized (and therefore unmanaged and unsecured) WLAN to the organization’s network. A record


                                                    
     INFRASTRUCTURE HARDENING POLICY
                                          

of the scan results will be kept in the helpdesk ticketing system. The recommended WiFi scanning
software is inSSIDer.


    11. Firewalls
Firewalls are an essential component of the infrastructure security. Firewalls are defined as security
systems that control and restrict both Internet connectivity and Internet services. Firewalls establish a
perimeter where access controls are enforced.

Firewalls used to protect the internal data center networks must run on dedicated devices. These devices
may not serve other purposes such as act as web servers. All firewalls must be located in locked rooms
accessible only to those who must have physical access to such firewalls to perform the tasks assigned
by management. Every Internet connectivity path and Internet service not specifically permitted must be
blocked by the firewalls.

Configuration changes must follow the appropriate change management procedure. All configuration
change requests are to be entered, reviewed, tracked, approved or denied, and documented via the help
desk ticketing system before any changes to firewall configurations are made. New rule-sets for services
are reviewed by the IT Director before the implementing the service. Alternatively, when an application
is phased out or up-graded, the firewall rules-set is formally changed. This approach adds some rigor
and discipline to the firewall policy implementation, minimizing the presence of old and potentially
insecure rules that are no longer needed.

Because firewalls provide such an important barrier installations and rule-sets are audited on a regular,
periodic basis (not to exceed six months). These periodic reviews are tracked in the help desk ticketing
system.


     12. IPS
Intrusion prevention is a preemptive approach to network security used to identify potential threats and
respond to them swiftly. Like an intrusion detection system (IDS), the intrusion prevention system (IPS)
monitors network traffic. However, because an exploit may be carried out very quickly after the attacker
gains access, the intrusion prevention systems has the ability to take immediate action, based on a set of
rules. IPS scans traffic on all major protocols, using continually updated signatures to detect and block
all types of threats. IP addresses identified as the source of an attack are automatically blocked to
prevent further malicious traffic from entering the network.


    13. DMZ
Devices that are Internet facing are considered part of the “De-Militarized Zone” (DMZ). DMZ servers
may not store any sensitive information. Any sensitive information required for the service(s) must be
retrieved via an encrypted connection from, and stored on a server in the internal network. Any
temporary files containing sensitive data must be removed immediate upon serving, or by an hourly or
daily scheduled job.



                                                
     INFRASTRUCTURE HARDENING POLICY
                                          

    14. Enforcement
If any member of the Domain administrators is found to have breached this policy, they may be subject
to disciplinary action up to and including termination. Anyone who knows or has reason to believe that
another person has violated this policy should report the matter promptly to his or her supervisor or the
IT Director. All reported matters will be investigated, and, where appropriate, steps will be taken to
remedy the situation. Where possible, every effort will be made to handle the reported matter
confidentially. Any attempt to retaliate against a person for reporting a violation of this policy will itself
be considered a violation of this policy that may result in disciplinary action up to and including
termination of employment.




                                                 
   INFRASTRUCTURE HARDENING POLICY
                                 

                                 Revision History
REVISION DATE    APPROVAL DATE         REQUESTED BY           DESCRIPTION
  Original 1.0     8/31/11 AAP             AAP
    5/20/13        5/20/13 AAP             TMS           Added verbiage regarding re-
                                                         scans
    4/25/15        4/25/15 AAP               RPD         Annual review – no changes
     7/4/16           7/04/16                RPD         Changed Vulnerability
                                                         scanning to match current
                                                         interval.
   5/8/2017        6/23/17 AAP               TMS         Revised reference to
                                                         “Password Policy”
    3/21/18        4/3/18 RRH             LEC/PMC        Annual review – changed IT
                                                         Manager to IT Director, IT
                                                         Staff to domain
                                                         administrators
    5/16/19        5/16/19 LEC               PMC         Annual review – no changes
  12-16-2019                                 TMS         Modified section on pen
                                                         testing to include
                                                         remediation of pen test
                                                         results and re-tests
    2/7/20         2/7/20 LEC                TMS         Changed testing schedule
                                                         from every 12 months to
                                                         annually