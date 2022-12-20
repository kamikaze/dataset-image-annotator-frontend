job("Build") {
  kaniko {
    beforeBuildScript {
      // Create an env variable BRANCH,
      // use env var to get full branch name,
      // leave only the branch name without the 'refs/heads/' path
      content = """
          export BRANCH=${'$'}(echo ${'$'}JB_SPACE_GIT_BRANCH | cut -d'/' -f 3);
          export REVISION=${${'$'}JB_SPACE_GIT_REVISION:0:8}
      """
    }
    build {
      context = "."
      dockerfile = "Dockerfile"
      labels["vendor"] = "bixority"
    }

    push("bixority.registry.jetbrains.space/p/rtu/containers/{"$"}JB_SPACE_GIT_REPOSITORY_NAME") {
      tags {
        +"${"$"}BRANCH-${"$"}REVISION"
      }
    }
  }
}
