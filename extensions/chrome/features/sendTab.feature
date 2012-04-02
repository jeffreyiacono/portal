Feature: Send tab

  Scenario: Sending a tab
    Given I am on "http://news.ycombinator.com"
    When I click the Portal icon
    And I pick Jeff
    And I click send
    Then Jeff should see "http://news.ycombinator.com"
