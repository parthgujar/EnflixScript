{"StartTimeUtc":"2018-09-18T23:45:25.8393838Z","EndTimeUtc":"2018-09-18T23:45:26.2599258Z","Status":"Failed","Name":"Calculate statistics for all users","Key":"StatisticsCalculateStatsTask","Id":"d459f39d7abb81f5fcce03048a7ecf4d","ErrorMessage":"Sequence contains no elements","LongErrorMessage":"   at System.Linq.Enumerable.Aggregate[TSource](IEnumerable`1 source, Func`3 func)\n   at Statistics.Helpers.Calculator.CalculateOldestMovie()\n   at Statistics.ScheduledTasks.CalculateStatsTask.MediaBrowser.Model.Tasks.IScheduledTask.Execute(CancellationToken cancellationToken, IProgress`1 progress)\n   at Emby.Server.Implementations.ScheduledTasks.ScheduledTaskWorker.ExecuteInternal(TaskOptions options)"}