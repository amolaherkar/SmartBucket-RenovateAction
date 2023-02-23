module.exports = {
  branchPrefix: 'Smart-',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <amolaherkar@gmail.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  dryRun: 'full',
  repositories: [
    'amolaherkar/SmartBucket-RenovateAction'
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
