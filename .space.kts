job("Build") {
  kaniko {
    beforeBuildScript {
      // Create an env variable BRANCH,
      // use env var to get full branch name,
      // leave only the branch name without the 'refs/heads/' path
      content = """
          export BRANCH=${'$'}(echo ${'$'}JB_SPACE_GIT_BRANCH | cut -d'/' -f 3)
      """
    }
    build {
      context = "."
      dockerfile = "Dockerfile"
      labels["vendor"] = "bixority"
    }

    push("bixority.registry.jetbrains.space/p/rtu/containers/dataset-image-annotator-frotend") {
      val spaceRepo = "mycompany.registry.jetbrains.space/p/prjkey/mydocker/myimage"
      tags {
        +"$spaceRepo:0.${"$"}JB_SPACE_EXECUTION_NUMBER"
        +"$spaceRepo:$BRANCH-$JB_SPACE_GIT_REVISION"
      }
    }
  }
}
