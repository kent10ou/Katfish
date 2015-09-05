//
//  ViewController.m
//  Katfish
//
//  Created by Kent Ou on 9/4/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "ViewController.h"

// Add this to the header of your file, e.g. in ViewController.m
// after #import "ViewController.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>

// Category, an extension of ViewController class
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
  FBSDKLoginButton *loginButton = [[FBSDKLoginButton alloc] init];
  // Optional: Place the button in the center of your view.
  loginButton.center = self.view.center;
  [self.view addSubview:loginButton];

}

- (void)didReceiveMemoryWarning
{
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

@end